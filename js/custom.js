// 애드블럭 차단
window.onload = () => {
  $("#refreshButton").on("click", function () {
    window.location.reload();
  });
  function errorCheck() {
    if (!window.adsbygoogle.hasOwnProperty("push")) {
      $(".adblock-out").addClass("on");
      $("#wrap").remove();
    }
  }
  errorCheck();
};

// 상단 내용 추가
// 상단 헤더
if (window.location.href === "https://gridy.tistory.com/") {
  document.querySelector(".content-title").classList.add("home");
  document.querySelector(".content-title").innerHTML = `
			<div class="title">GRIDY</div>
			<div class="sub-title">FRONTEND DEVELOPER</div>
			<div class="sub-text">디자이너가 되고 싶은 개발자</div>
		`;
}

// 효과 적용
// const transitionExit = (data) => {
//   let tl = gsap.timeline();
//   tl.to(".page-transition", {
//     duration: 0.5,
//     scaleY: 1,
//     y: "0",
//     transformOrigin: "top",
//     stagger: 0.2,
//   });
//   tl.to(".page-transition", {
//     duration: 0.5,
//     scaleY: 0,
//     y: "0",
//     transformOrigin: "top",
//     stagger: 0.2,
//     delay: 0.5,
//   });
// };

// const transitionEnter = (data) => {
//   let tl = gsap.timeline();
// };

// const transitionIn = (data) => {
//   let tl = gsap.timeline();
//   tl.fromTo(
//     ".page-transition",
//     {
//       scaleY: 1,
//     },
//     {
//       duration: 0.5,
//       scaleY: 0,
//       transformOrigin: "top",
//       stagger: 0.1,
//       delay: 1,
//     }
//   );
// };

// function delay(n) {
//   n = n || 2000;
//   return new Promise((done) => {
//     setTimeout(() => {
//       done();
//     }, n);
//   });
// }

// barba.init({
//   sync: true,
//   transitions: [
//     {
//       name: "transition",
//       async leave(data) {
//         const done = this.async();
//         transitionExit(data);

//         await delay(1000);
//         done();
//       },
//       async enter(data) {
//         transitionEnter(data);
//       },
//       async once(data) {
//         transitionIn(data);
//       },
//     },
//   ],
// });
