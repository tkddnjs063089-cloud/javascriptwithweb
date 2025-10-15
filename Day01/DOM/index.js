// 자바스크립트로 버튼을 만들거임
//기본 : 5개
//참조 : 참조:obh,func,arr + document[html],Element[tag]
const btn = document.createElement("button");
btn.innerText = "월요일 ㅅㄱ";
btn.style.color = "red";
document.body.appendChild(btn);

const div = document.createElement("div");
div.innerText = "월요일 ㅅㄱ";
document.body.appendChild(div);

const a = document.createElement("a");
a.innerText = "쿠팡 이동";
document.body.appendChild(a);
a.href =
  "https://www.coupang.com/?src=1042016&spec=10304903&addtag=900&ctag=HOME&lptag=%EC%BF%A0%ED%8C%A1&itime=20250922122705&pageType=HOME&pageValue=HOME&wPcid=17570360012915293775557&wRef=www.google.com&wTime=20250922122705&redirect=landing&gclid=Cj0KCQjwxL7GBhDXARIsAGOcmIP8OVMadw6jxd-0kGvT_JVTH1nlN2MgfMiiR4JqdIxjLlTC0aDAUcEaAgLbEALw_wcB&mcid=3c4311b37b1e44cea1414a1ace5bf33a&network=g";
