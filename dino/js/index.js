/***** 기본 셋업 *****/
const insideBackground = document.querySelector(".insidebackground");
const dino = document.querySelector("#dino");
const dinoImg = dino.querySelector(".dinobox");
const scoreText = document.querySelector("#score");
const ground = document.querySelector(".ground");

let isJumping = false;
let isDucking = false;
let cactusSpeed = 1.5;
let score = 0;
let gameOver = false;
let gameStarted = false;
let gameStartTime = null;

/***** 공룡 걷기 *****/
const dinoFrames = ["img/right.png", "img/left.png"];
let frameIdx = 0;
let walkInterval = null;
function startWalk() {
  clearInterval(walkInterval);
  walkInterval = setInterval(() => {
    if (!gameOver && !isJumping && !isDucking) {
      frameIdx = (frameIdx + 1) % dinoFrames.length;
      dinoImg.src = dinoFrames[frameIdx];
    }
  }, 400);
}

/***** 점수 *****/
let scoreInterval = null;
function startScore() {
  scoreInterval = setInterval(() => {
    if (!gameOver && gameStarted) {
      score++;
      scoreText.textContent = `점수: ${score}점`;
    }
  }, 100);
}

/***** 점프 *****/
function jump() {
  if (!gameStarted || isJumping || gameOver) return;
  isJumping = true;

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const base = 25; // ground 기준
  let bottom = base;

  let velocity = isMobile ? 0.8 : 0.8;
  const gravity = isMobile ? 0.04 : 0.04;
  const maxHeight = isMobile ? 60 : 45;

  const jumpLoop = setInterval(() => {
    bottom += velocity;
    velocity -= gravity;

    if (bottom >= maxHeight) {
      bottom = maxHeight;
      velocity = -Math.abs(velocity);
    }

    if (bottom <= base) {
      bottom = base;
      isJumping = false;
      clearInterval(jumpLoop);
    }

    dino.style.bottom = `${bottom}%`;
  }, 16);
}

/***** 숙이기 *****/
function duckStart() {
  if (!gameStarted || isJumping || isDucking || gameOver) return;
  isDucking = true;
  dinoImg.src = "img/duck.png";
  dinoImg.style.height = "30px";
}
function duckEnd() {
  if (!gameStarted || !isDucking || gameOver) return;
  isDucking = false;
  dinoImg.src = "img/dino.png";
  dinoImg.style.height = "100px";
}

/***** 조작 *****/
window.addEventListener("keydown", (e) => {
  if (!gameStarted) return;
  if (e.key === "ArrowUp") jump();
  if (e.key === "ArrowDown") duckStart();
});
window.addEventListener("keyup", (e) => {
  if (!gameStarted) return;
  if (e.key === "ArrowDown") duckEnd();
});

/***** 📱 모바일 터치 *****/
let touchTimer = null;
window.addEventListener("touchstart", () => {
  if (!gameStarted || gameOver) return;
  touchTimer = setTimeout(() => duckStart(), 300);
});
window.addEventListener("touchend", () => {
  if (!gameStarted || gameOver) return;
  if (touchTimer) {
    clearTimeout(touchTimer);
    touchTimer = null;
    if (!isDucking) jump();
    else duckEnd();
  }
});

/***** 장애물 (선인장 + 익룡) *****/
const cactusOptions = [
  { src: "img/long cactus.png", w: 25, h: 70 },
  { src: "img/middle cactus.png", w: 30, h: 60 },
  { src: "img/short cactus.png", w: 25, h: 40 },
  { src: "img/pterosaur.png", w: 50, h: 40 },
];

function createCactus() {
  if (!gameStarted) return;

  const cactus = document.createElement("div");
  cactus.style.position = "absolute";
  cactus.style.right = "-20%";
  cactus.style.zIndex = "12";

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const elapsed = (Date.now() - gameStartTime) / 1000;
  const availableOptions =
    elapsed >= 15
      ? cactusOptions
      : cactusOptions.filter((opt) => !opt.src.includes("pterosaur"));

  const opt =
    availableOptions[Math.floor(Math.random() * availableOptions.length)];
  const img = document.createElement("img");
  img.src = opt.src;

  // 모바일 크기 축소
  const scale = isMobile ? 1 : 1;
  img.style.width = opt.w * scale + "px";
  img.style.height = opt.h * scale + "px";
  cactus.appendChild(img);

  if (opt.src.includes("pterosaur")) {
    const flyHeight = isMobile
      ? 55 + Math.random() * 5
      : 40 + Math.random() * 2;
    cactus.style.bottom = flyHeight + "%";
  } else {
    cactus.style.bottom = "25%";
  }

  insideBackground.appendChild(cactus);

  let rightPercent = -5;
  const move = setInterval(() => {
    if (!gameStarted || gameOver) {
      clearInterval(move);
      cactus.remove();
      return;
    }

    rightPercent += cactusSpeed;
    cactus.style.right = `${rightPercent}%`;

    // 🎯 좀 더 일찍 삭제 (잔상 방지)
    if (rightPercent > 120) {
      cactus.remove();
      clearInterval(move);
      return;
    }

    // 충돌 감지 — 여유 거리 추가
    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    const margin = 5; // ← 충돌 여유 공간
    const isCollision =
      dinoRect.left + margin < cactusRect.right - margin &&
      dinoRect.right - margin > cactusRect.left + margin &&
      dinoRect.top + margin < cactusRect.bottom - margin &&
      dinoRect.bottom - margin > cactusRect.top + margin;

    if (isCollision) {
      endGame();
      clearInterval(move);
    }
  }, 16);
}

/***** 루프 *****/
function spawnLoop() {
  if (!gameStarted || gameOver) return;
  createCactus();
  const delay = 1800 + Math.random() * 1500;
  setTimeout(spawnLoop, delay);
}

/***** 바닥 움직임 *****/
let ground1 = ground;
let ground2 = ground.cloneNode(true);
ground2.classList.add("ground-clone");
ground.parentNode.appendChild(ground2);
let groundX1 = 0;
let groundX2 = 99.8;

function moveGround() {
  if (!gameStarted || gameOver) return;
  groundX1 -= cactusSpeed / 2;
  groundX2 -= cactusSpeed / 2;

  if (groundX1 <= -99.8) groundX1 = 99.8;
  if (groundX2 <= -99.8) groundX2 = 99.8;

  ground1.style.transform = `translateX(${groundX1}%)`;
  ground2.style.transform = `translateX(${groundX2}%)`;

  requestAnimationFrame(moveGround);
}

/***** 속도 증가 *****/
function increaseCactusSpeed() {
  const timer = setInterval(() => {
    if (gameOver || !gameStarted) {
      clearInterval(timer);
      return;
    }
    if (cactusSpeed < 5) cactusSpeed += 0.01;
  }, 1500);
}

/***** 게임오버 *****/
function endGame() {
  if (gameOver) return;
  gameOver = true;
  gameStarted = false;
  clearInterval(scoreInterval);
  clearInterval(walkInterval);

  const banner = document.createElement("div");
  banner.className = "gameover-text";
  banner.textContent = "💥 GAME OVER 💥";
  document.body.appendChild(banner);

  const player = prompt("닉네임을 입력하세요!");
  if (player) {
    saveScore(player, score);
    renderRanking();
  }

  const restartBtn = document.createElement("button");
  restartBtn.id = "restart-btn";
  restartBtn.style.position = "absolute";
  restartBtn.style.top = "60%";
  restartBtn.style.left = "50%";
  restartBtn.style.transform = "translate(-50%, -50%)";
  restartBtn.style.zIndex = "30";
  restartBtn.style.border = "none";
  restartBtn.style.backgroundColor = "transparent";
  document.body.appendChild(restartBtn);

  const restartImg = document.createElement("img");
  restartImg.src = "img/restartgame.png";
  restartImg.style.width = "25%";
  restartBtn.appendChild(restartImg);

  restartBtn.addEventListener("click", () => {
    resetGame();
    startGame();
  });
}

/***** 랭킹 *****/
function saveScore(name, score) {
  const list = JSON.parse(localStorage.getItem("dinoRanking") || "[]");
  list.push({ name, score });
  list.sort((a, b) => b.score - a.score);
  localStorage.setItem("dinoRanking", JSON.stringify(list.slice(0, 3)));
}

function renderRanking() {
  const box = document.getElementById("ranking");
  const list = JSON.parse(localStorage.getItem("dinoRanking") || "[]");
  if (!box) return;
  if (list.length === 0) {
    box.innerHTML = "아직 기록이 없습니다 🦖";
    return;
  }
  let html = "<strong>🏆 랭킹 🏆</strong><br><br>";
  list.forEach((r, i) => (html += `${i + 1}. ${r.name} — ${r.score}점<br>`));
  box.innerHTML = html;
}

/***** 초기화 & 시작 *****/
function resetGame() {
  gameOver = false;
  gameStarted = false;
  score = 0;
  cactusSpeed = 0.3;
  scoreText.textContent = "점수 : 0";

  document.querySelectorAll(".insidebackground > div").forEach((el) => {
    if (!el.classList.contains("dino") && !el.classList.contains("score")) {
      el.remove();
    }
  });

  document
    .querySelectorAll(".gameover-text, #restart-btn")
    .forEach((el) => el.remove());
}

function startGame() {
  gameStarted = true;
  gameStartTime = Date.now();
  startWalk();
  startScore();
  spawnLoop();
  increaseCactusSpeed();
  moveGround();
  renderRanking();
  adjustDinoSize();
}

/***** 공룡 크기 (모바일 절반) *****/
function adjustDinoSize() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const scale = isMobile ? 2 : 2;
  dinoImg.style.width = 60 * scale + "px";
  dinoImg.style.height = 60 * scale + "px";
}

/***** 시작 *****/
document.addEventListener("DOMContentLoaded", () => {
  renderRanking();
  adjustDinoSize();

  const startScreen = document.getElementById("start-screen");
  const startBtn = document.getElementById("start-btn");
  startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    resetGame();
    startGame();
  });

  function updateControlsText() {
    const controlsBox = document.getElementById("controls");
    if (!controlsBox) return;
    const isMobile = window.matchMedia("(max-width: 1400px)").matches;
    if (isMobile) {
      controlsBox.innerHTML = `
        <strong>📱 조작법</strong><br><br>
        화면 터치: 점프<br>
        꾹 누르기: 숙이기
      `;
    } else {
      controlsBox.innerHTML = `
        <strong>⌨️ 조작법</strong><br><br>
        ⬆️ 점프<br>
        ⬇️ 숙이기
      `;
    }
  }
  updateControlsText();
  window.addEventListener("resize", () => {
    updateControlsText();
    adjustDinoSize();
  });
});

// 🌥 배경 무한 스크롤
(function smoothParallax() {
  const bg = document.querySelector(".background");
  if (!bg) return;
  let x = 0;
  const SPEED = -0.2;
  function tick() {
    x -= SPEED;
    if (x <= -100) x += 100;
    bg.style.backgroundPosition = `${x}% 0%`;
    requestAnimationFrame(tick);
  }
  tick();
})();
