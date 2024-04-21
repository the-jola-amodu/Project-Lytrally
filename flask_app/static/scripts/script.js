const screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const screenHeight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

// This code opens and closes the dropdown
// let hambuger = document.getElementById("openNav");
let hamburger = document.querySelector(".menu-btn");
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
hamburger.addEventListener("click", () => {
  if (hamburger.checked) {
    console.log("Hamburger checked");
    navDisplay.style.height = "400px";
    navDisplay.style.paddingBlock = "32px";
    overlay.style.display = "block";
    navDisplay.style.borderRadius = "10px";
    navDisplay.style.display = "flex";
    gearDropdown.style.display = "none";
    // signinSignupContainer.style.display = "none";
  } else {
    console.log("Hamburger unchecked");
    navDisplay.style.display = "none";
    overlay.style.display = "none";
    navDisplay.style.height = "0px";
    navDisplay.style.paddingBlock = "0px";
    navDisplay.style.border = 0;
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

// Handles the gear icon event for small screens
// This code toggles the geardropdown
let gear = document.querySelector(".gear");
let gearDropdown = document.querySelector(".gearDropdown");
gear.addEventListener("click", () => {
  if (gearDropdown.style.display === "none") {
    gearDropdown.style.display = "flex";
  } else {
    gearDropdown.style.display = "none";
  }
});

// This code toggles the notification on and off
let toggle = document.querySelector(".toggle");
let toogleContainer = document.querySelector(".notificationToggle");
toggle.addEventListener("click", () => {
  if (toggle.classList.contains("toggleOn")) {
    toggle.classList.remove("toggleOn");
    toogleContainer.classList.remove("toggleContainerOn");
    toggle.classList.add("toggleOff");
    toogleContainer.classList.add("toggleContainerOff");
  } else {
    toggle.classList.remove("toggleOff");
    toogleContainer.classList.remove("toggleContainerOff");
    toggle.classList.add("toggleOn");
    toogleContainer.classList.add("toggleContainerOn");
  }
});

// Handles the gear icon event for large screens
// This code toggles the geardropdown
let lsGear = document.querySelector(".lsGear");
let lsGearDropdown = document.querySelector(".lsGearDropdown");
lsGear.addEventListener("click", () => {
  if (lsGearDropdown.style.display === "none") {
    lsGearDropdown.style.display = "flex";
  } else {
    lsGearDropdown.style.display = "none";
  }
});

// This code toggles the notification on and off
let lsToggle = document.querySelector(".lsToggle");
let lsToogleContainer = document.querySelector(".lsNotificationToggle");
lsToggle.addEventListener("click", () => {
  if (lsToggle.classList.contains("toggleOn")) {
    lsToggle.classList.remove("toggleOn");
    lsToogleContainer.classList.remove("toggleContainerOn");
    lsToggle.classList.add("toggleOff");
    lsToogleContainer.classList.add("toggleContainerOff");
  } else {
    lsToggle.classList.remove("toggleOff");
    lsToogleContainer.classList.remove("toggleContainerOff");
    lsToggle.classList.add("toggleOn");
    lsToogleContainer.classList.add("toggleContainerOn");
  }
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
