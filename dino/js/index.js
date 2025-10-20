/***** 기본 셋업 *****/
const insideBackground = document.querySelector(".insidebackground");
const background = document.querySelector(".background");
const dino = document.querySelector("#dino");
const dinoImg = dino.querySelector(".dinobox");
const scoreText = document.querySelector("#score");

const GROUND_Y = 458;
const JUMP_TOP = 600;

let isJumping = false;
let isDucking = false;
let gravity = 5;
let cactusSpeed = 5;
let score = 0;
let gameOver = false;
let gameStarted = false;
let gameStartTime = 0; // ✅ 게임 시작 시점 저장용

/***** 걷기 애니메이션 *****/
const dinoFrames = ["img/right.png", "img/left.png"];
let frameIdx = 0;
let walkInterval = null;
let walkMs = 500;

function startWalk() {
  if (walkInterval) clearInterval(walkInterval);
  walkInterval = setInterval(() => {
    if (!gameOver && !isJumping && !isDucking) {
      frameIdx = (frameIdx + 1) % dinoFrames.length;
      dinoImg.src = dinoFrames[frameIdx];
    }
  }, walkMs);
}

/***** 점수 *****/
let scoreInterval = null;
function startScore() {
  scoreInterval = setInterval(() => {
    if (!gameOver && gameStarted) {
      score++;
      scoreText.textContent = "점수: " + score + "점";
    }
  }, 100);
}

/***** 점프 *****/
function jump() {
  if (!gameStarted || isJumping || gameOver) return;
  isJumping = true;
  let bottom = parseInt(getComputedStyle(dino).bottom, 10);

  const up = setInterval(() => {
    if (bottom < JUMP_TOP) {
      bottom += gravity;
      dino.style.bottom = bottom + "px";
    } else {
      clearInterval(up);
      const down = setInterval(() => {
        if (bottom > GROUND_Y) {
          bottom -= gravity;
          dino.style.bottom = bottom + "px";
        } else {
          clearInterval(down);
          isJumping = false;
          dino.style.bottom = GROUND_Y + "px";
        }
      }, 10);
    }
  }, 10);
}

/***** 숙이기 *****/
function duckStart() {
  if (!gameStarted || isJumping || isDucking || gameOver) return;
  isDucking = true;
  dinoImg.src = "img/duck.png"; // 숙이는 이미지
  dino.style.bottom = GROUND_Y - 0 + "px";
  dinoImg.style.height = "30px";
}

function duckEnd() {
  if (!gameStarted || !isDucking || gameOver) return;
  isDucking = false;
  dinoImg.src = "img/dino.png";
  dino.style.bottom = GROUND_Y + "px";
  dinoImg.style.height = "50px";
}

/***** 키 이벤트 *****/
document.addEventListener("keydown", (e) => {
  if (!gameStarted) return;

  if (e.key === "ArrowUp") {
    jump();
  }

  if (e.key === "ArrowDown") {
    duckStart();
  }
});

document.addEventListener("keyup", (e) => {
  if (!gameStarted) return;

  if (e.key === "ArrowDown") {
    duckEnd();
  }
});

/***** 선인장 + 익룡 데이터 *****/
const cactusOptions = [
  { src: "img/long cactus.png", w: 25, h: 70 },
  { src: "img/middle cactus.png", w: 30, h: 60 },
  { src: "img/short cactus.png", w: 25, h: 40 },
  { src: "img/pterosaur.png", w: 70, h: 50 },
];

/***** 장애물 생성 *****/
function createCactus() {
  if (!gameStarted) return;
  const cactus = document.createElement("div");
  cactus.style.position = "absolute";
  cactus.style.right = "-40px";

  // ✅ 게임 진행 시간 계산
  const elapsedTime = (Date.now() - gameStartTime) / 1000;

  // ✅ 10초 이전에는 익룡 제외
  const availableCactus =
    elapsedTime < 10
      ? cactusOptions.filter((opt) => !opt.src.includes("pterosaur"))
      : cactusOptions;

  const opt =
    availableCactus[Math.floor(Math.random() * availableCactus.length)];

  const img = document.createElement("img");
  img.src = opt.src;
  img.style.width = opt.w + "px";
  img.style.height = opt.h + "px";
  img.style.display = "block";
  cactus.appendChild(img);
  insideBackground.appendChild(cactus);

  // ✅ 익룡은 공중에 띄우기
  if (opt.src.includes("pterosaur")) {
    const flyHeight = GROUND_Y + 50 + Math.random() * 0; // 랜덤 높이
    cactus.style.bottom = flyHeight + "px";
  } else {
    cactus.style.bottom = GROUND_Y + "px";
  }

  let right = 40;
  const move = setInterval(() => {
    if (gameOver || !gameStarted) {
      clearInterval(move);
      cactus.remove();
      return;
    }

    right += cactusSpeed * 0.6;
    cactus.style.right = right + "px";

    if (right > background.offsetWidth + 100) {
      clearInterval(move);
      cactus.remove();
      return;
    }

    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();
    const isPterosaur = opt.src.includes("pterosaur");

    // ✅ 충돌 판정
    let hit =
      dinoRect.right > cactusRect.left &&
      dinoRect.left < cactusRect.right &&
      dinoRect.bottom > cactusRect.top &&
      dinoRect.top < cactusRect.bottom;

    // ✅ 익룡은 조금 여유 있게 (숙이기 피하기 가능)
    if (isPterosaur) {
      hit =
        dinoRect.right > cactusRect.left &&
        dinoRect.left < cactusRect.right &&
        dinoRect.top < cactusRect.bottom - 20;
    }

    if (hit) {
      endGame();
      clearInterval(move);
    }
  }, 10);
}

/***** 선인장 등장 루프 *****/
function spawnLoop() {
  if (!gameStarted || gameOver) return;
  const minDelay = 1800;
  const maxDelay = 3500;
  const delay = Math.max(minDelay, maxDelay - (cactusSpeed - 0.2) * 90);
  setTimeout(() => {
    createCactus();
    spawnLoop();
  }, delay);
}

/***** 속도 증가 *****/
function increaseCactusSpeed() {
  const timer = setInterval(() => {
    if (gameOver || !gameStarted) {
      clearInterval(timer);
      return;
    }
    if (cactusSpeed < 8) {
      cactusSpeed += 0.1;
    } else {
      clearInterval(timer);
    }
  }, 500);
}

/***** 바닥 무한 루프 *****/
let groundX1 = 0;
let groundX2 = 0;
let groundWidth = 0;
let ground1, ground2;

function moveGround() {
  if (!gameStarted || gameOver) return;

  groundX1 -= cactusSpeed * 0.6;
  groundX2 -= cactusSpeed * 0.6;

  ground1.style.left = groundX1 + "px";
  ground2.style.left = groundX2 + "px";

  if (groundX1 <= -groundWidth) groundX1 = groundX2 + groundWidth;
  if (groundX2 <= -groundWidth) groundX2 = groundX1 + groundWidth;

  requestAnimationFrame(moveGround);
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

  const restartGame = document.createElement("img");
  restartGame.src = "img/restartgame.png";
  restartGame.style.width = "25%";
  restartBtn.appendChild(restartGame);

  restartBtn.addEventListener("click", () => {
    resetGame();
    startGame();
  });

  setTimeout(() => {
    const name = prompt("이름을 입력하세요 (랭킹 등록)");
    if (name) {
      saveScore(name, score);
      renderRanking();
    }
  }, 400);
}

/***** 랭킹 관리 *****/
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

/***** 게임 초기화 & 시작 *****/
function resetGame() {
  gameOver = false;
  gameStarted = false;
  score = 0;
  cactusSpeed = 5;
  scoreText.textContent = "점수 : 0";

  document.querySelectorAll(".insidebackground > div").forEach((el) => {
    if (!el.classList.contains("dino") && !el.classList.contains("ground")) {
      el.remove();
    }
  });

  document
    .querySelectorAll(".gameover-text, #restart-btn")
    .forEach((el) => el.remove());
}

function startGame() {
  gameStarted = true;
  gameStartTime = Date.now(); // ✅ 게임 시작 시점 기록
  startWalk();
  startScore();
  spawnLoop();
  increaseCactusSpeed();
  renderRanking();
  moveGround();
}

/***** 처음 진입 시 *****/
document.addEventListener("DOMContentLoaded", () => {
  renderRanking();

  ground1 = document.querySelector(".ground");
  ground2 = ground1.cloneNode(true);
  insideBackground.appendChild(ground2);

  groundWidth = ground1.offsetWidth;
  groundX1 = 0;
  groundX2 = groundWidth;
  ground1.style.left = groundX1 + "px";
  ground2.style.left = groundX2 + "px";

  const startScreen = document.getElementById("start-screen");
  const startBtn = document.getElementById("start-btn");

  startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    resetGame();
    startGame();
  });

  // ✅ 포커스 유지
  setInterval(() => {
    if (document.activeElement !== document.body) {
      document.body.focus();
    }
  }, 500);
});
