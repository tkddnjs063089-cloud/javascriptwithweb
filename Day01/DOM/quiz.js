//유저에게 태그와 내용을 프롬프트 한번에 입력받고
//올바른 태그를 넣으면 태그와 내용 만들기

//ex) div "김치찌개" -><div>김치찌개<div>

// const [tag, content] = prompt("태그와 내용을 입력하세요").split(" ");

// const newtag = document.createElement(tag);
// newtag.innerText = content;
// document.body.appendChild(newtag);

const contents = prompt("내용을 입력하세요").split(" ");
contents.forEach((v) => {
  const btn = document.createElement("button");
  btn.innerText = v;
  document.body.appendChild(btn);
});
