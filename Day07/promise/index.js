const a = new Promise((resolve, reject) => {
  const num = +prompt("숫자입력");
  if (num >= 0) resolve("약과");
  else reject("초콜릿");
});

a.then((v) => console.log(`${v} 꿀맛!`)).catch((v) =>
  console.log(`${v} 노맛!`)
);
