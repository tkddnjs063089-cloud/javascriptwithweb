//fetch(가져오다):

const koreahour = document.querySelector("#koreahour");

setInterval(() => {
  const a = new Date();
  const Hours = a.getHours();
  const Minutes = a.getMinutes();
  koreahour.innerText = `한국 시간 : ${Hours}:${Minutes}`;
}, 1000);

const outline = document.querySelector("#outline");
const Bern = document.querySelector("#Bern");
const Wellington = document.querySelector("#Wellington");
const Toshkent = document.querySelector("#Toshkent");
const Tokyo = document.querySelector("#Tokyo");
const La = document.querySelector("#La");
const London = document.querySelector("#London");
const btn = document.querySelectorAll("button");
const anotherhour = document.querySelector("#anotherhour");

const btns = [Bern, Wellington, Toshkent, Tokyo, La, London];

outline.style.backgroundImage = "url(js/bupyeong.avif)";
outline.style.backgroundImageSize = "cover";

let timerId = null;

btns[0].addEventListener("click", () => {
  outline.style.backgroundImage = "url(js/bern.avif)";
  const apikey = "2d36173546a10f8ffabdc574d9fff1a3";
  const long = 7.446074;
  const lat = 46.947036;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`
  )
    .then((res) => res.json())
    .then((v) => {
      if (timerId) clearInterval(timerId);
      timerId = setInterval(() => {
        const utc = v.dt * 1000;
        const localTime = new Date(utc + v.timezone * 1000);

        const bernhour = localTime.getHours();
        const bernMinutes = localTime.getMinutes();
        anotherhour.innerText = `베른 시간:${bernhour}:${bernMinutes}`;
      }, 1000);
    });
});
btns[1].addEventListener("click", () => {
  outline.style.backgroundImage = "url(js/wellington.jpg)";
  const apikey = "2d36173546a10f8ffabdc574d9fff1a3";
  const long = 174.778746;
  const lat = -41.292381;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`
  )
    .then((res) => res.json())
    .then((v) => {
      if (timerId) clearInterval(timerId);
      timerId = setInterval(() => {
        const utc = v.dt * 1000;
        const localTime = new Date(utc + v.timezone * 1000);

        const wellingtonhour = localTime.getHours();
        const wellingtonMinutes = localTime.getMinutes();
        anotherhour.innerText = `웰링턴 시간:${wellingtonhour}:${wellingtonMinutes}`;
      });
    });
});
btns[2].addEventListener("click", () => {
  outline.style.backgroundImage = "url(js/Toshkent.jpg)";
  const apikey = "2d36173546a10f8ffabdc574d9fff1a3";
  const long = 69.240073;
  const lat = 41.299496;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`
  )
    .then((res) => res.json())
    .then((v) => {
      if (timerId) clearInterval(timerId);
      timerId = setInterval(() => {
        const utc = v.dt * 1000;
        const localTime = new Date(utc + v.timezone * 1000);

        const Toshkenthour = localTime.getHours();
        const ToshkentMinutes = localTime.getMinutes();
        anotherhour.innerText = `타슈칸트 시간:${Toshkenthour}:${ToshkentMinutes}`;
      });
    });
});
btns[3].addEventListener("click", () => {
  outline.style.backgroundImage = "url(js/Tokyo.jpg)";
  const apikey = "2d36173546a10f8ffabdc574d9fff1a3";
  const long = 139.650027;
  const lat = 35.676423;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`
  )
    .then((res) => res.json())
    .then((v) => {
      if (timerId) clearInterval(timerId);
      timerId = setInterval(() => {
        const utc = v.dt * 1000;
        const localTime = new Date(utc + v.timezone * 1000);

        const Tokyohour = localTime.getHours();
        const TokyoMinutes = localTime.getMinutes();
        anotherhour.innerText = `도쿄 시간:${Tokyohour}:${TokyoMinutes}`;
      });
    });
});
btns[4].addEventListener("click", () => {
  outline.style.backgroundImage = "url(js/la.jpg)";
  const apikey = "2d36173546a10f8ffabdc574d9fff1a3";
  const long = -118.411;
  const lat = 34.054908;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`
  )
    .then((res) => res.json())
    .then((v) => {
      if (timerId) clearInterval(timerId);
      timerId = setInterval(() => {
        const utc = v.dt * 1000;
        const localTime = new Date(utc + v.timezone * 1000);

        const lahour = localTime.getHours();
        const laMinutes = localTime.getMinutes();
        anotherhour.innerText = `로스앤젤레스 시간:${lahour}:${laMinutes}`;
      });
    });
});
btns[5].addEventListener("click", () => {
  outline.style.backgroundImage = "url(js/London.jpg)";
  const apikey = "2d36173546a10f8ffabdc574d9fff1a3";
  const long = -0.1275;
  const lat = 51.5072;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`
  )
    .then((res) => res.json())
    .then((v) => {
      if (timerId) clearInterval(timerId);
      timerId = setInterval(() => {
        const utc = v.dt * 1000;
        const localTime = new Date(utc + v.timezone * 1000);

        const Londonhour = localTime.getHours();
        const LondonMinutes = localTime.getMinutes();
        anotherhour.innerText = `런던 시간:${Londonhour}:${LondonMinutes}`;
      });
    });
});

//베른 웰링턴 타슈켄트 도쿄 로스앤젤레스 런던
