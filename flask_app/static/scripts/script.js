const screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const screenHeight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

// This code opens and closes the dropdown
let hambuger = document.getElementById("openNav");
let navDisplay = document.querySelector(".navDisplay");
let navLinks = document.querySelectorAll(".navA");
let sScreen = document.querySelector(".s-screen");
let landingPage = document.querySelector(".landingPage");
sScreen.style.zIndex = "9999";
var overlay = document.createElement("div");
overlay.classList.add("overlay");
overlay.style.display = "none";
overlay.style.opacity = "0.9";
overlay.style.backdropFilter = "blur(3px)";
overlay.style.zIndex = "1";
overlay.style.left = "0";
overlay.style.right = "0";
overlay.style.bottom = "0";
overlay.style.position = "fixed";
overlay.style.background = "rgba(0,0,0,0.5)";
// landingPage.appendChild(overlay);
hambuger.addEventListener("click", () => {
  if (navDisplay.style.display === "none") {
    navDisplay.style.height = "400px";
    navDisplay.style.paddingBlock = "32px";
    overlay.style.display = "block";
    navDisplay.style.borderRadius = "10px";
    navDisplay.style.display = "flex";
    // signinSignupContainer.style.display = "none";
  } else {
    navDisplay.style.display = "none";
    overlay.style.display = "none";
    navDisplay.style.height = "0px";
    navDisplay.style.paddingBlock = "0px";
  }
});
// let closeNavBar = () => {
//     navDisplay.style.display = "none";
//     navDisplay.style.height = "0px";
//     navDisplay.style.paddingBlock = "0px";
// }

// The code changes the visibility of the navbar list on clicking any link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navDisplay.style.display = "none";
    overlay.style.display = "none";
    navDisplay.style.height = "0px";
    navDisplay.style.paddingBlock = "0px";
  });
});

heroPage_sm = document.querySelector(".heroPage");
nav_sm = document.querySelector(".navDisplay");
body_sm = document.getElementsByTagName("body");

window.addEventListener("load", () => {
  if (screenHeight < 380) {
    console.log(screenHeight);
    heroPage_sm.style.overflow = "auto";
    nav_sm.style.overflow = "auto";
    heroPage_sm.style.paddingTop = "3rem";
    heroPage_sm.style.paddingBottom = "2rem";
    // body_sm.style.overflow = "auto";
  }
});
