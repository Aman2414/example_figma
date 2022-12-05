let menuBtn = document.querySelector(".container");
// let nav = document.querySelector(".nav-links-ul");
let nav = document.querySelector(".nav-links-ul");

menuBtn.addEventListener("click", () => {
  if (nav.style.display != "none") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});

$(window).resize(function () {
  if ($(window).width() > 1092) {
    nav.style.display = "block";
  }
});

// if ($(window).width() > 1092) {
//   alert("Window width" + $(window).width());
// }
