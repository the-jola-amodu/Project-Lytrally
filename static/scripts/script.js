// This code opens and closes the dropdown
let hambuger = document.getElementById("openNav");
let navDisplay = document.querySelector(".navDisplay");
let sScreen = document.querySelector(".s-screen");
let landingPage = document.querySelector(".landingPage");
sScreen.style.zIndex = "9999";
var overlay = document.createElement("div");
overlay.classList.add("overlay");
overlay.style.display = "none";
overlay.style.opacity = "0.9";
overlay.style.backdropFilter = "blur(3px)";
overlay.style.zIndex = "1";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.right = "0";
overlay.style.bottom = "0";
overlay.style.position = "fixed";
overlay.style.background = 'rgba(0,0,0,0.5)';
landingPage.appendChild(overlay);
let openNavBar = () => {
  if (navDisplay.style.display === "none") {
    navDisplay.style.height = "400px";
    navDisplay.style.paddingBlock = "32px";
    overlay.style.display = "block";
    navDisplay.style.borderRadius = "10px";
    navDisplay.style.display = "flex";
    signinSignupContainer.style.display = "none";
  } else {
    navDisplay.style.display = "none";
    overlay.style.display = "none";
    navDisplay.style.height = "0px";
    navDisplay.style.paddingBlock = "0px";
  }
};
// let closeNavBar = () => {
//     navDisplay.style.display = "none";
//     navDisplay.style.height = "0px";
//     navDisplay.style.paddingBlock = "0px";
// }

// The code below control how the display of the signin and signup card
let signInLink = document.getElementById("signIn");
let signUpLink = document.getElementById("signUp")
let signinSignupContainer = document.getElementById("signIn_signUp");
let signinSigiupHeader = document.getElementById("signin_sigiup_header");
let googleBtn = document.getElementById("google_btn");
let facebookBtn = document.getElementById("facebook_btn");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let rememberMe = document.querySelector(".check_forgot");
let forgotPassword = document.getElementById("forgotPassword");
let submitBtn = document.getElementById("submit");
let noAccount = document.querySelector(".noAccount")

let signIn_signUp = () =>
{
  navDisplay.style.display = "none";
  overlay.style.display = "none";
  navDisplay.style.height = "0px";
  navDisplay.style.paddingBlock = "0px";
  if (signinSignupContainer.style.display === "none")
  {
    signinSignupContainer.style.display = "block";
  }
  else
  {
    signinSignupContainer.style.display = "none";
  }
}

// This code displays the features list
let featuresDisplay = document.getElementById("featuresDisplay");
let lists = document.getElementById("lists");
let closeDisplay = document.getElementById("closeDisplay");
let features = () => {
  lists.style.height = "100%";
};
let closeFeatures = () => {
  lists.style.height = "0";
};

const screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const screenHeight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

heroPage_sm = document.querySelector(".heroPage");
nav_sm = document.querySelector(".navDisplay");
body_sm = document.getElementsByTagName("body");

window.addEventListener("load", () => {
  console.log(screenHeight);
  if (screenHeight < 380)
  {
    console.log(screenHeight)
    heroPage_sm.style.overflow = "auto";
    nav_sm.style.overflow = "auto";
    heroPage_sm.style.paddingTop = "3rem";
    heroPage_sm.style.paddingBottom = "2rem";
    // body_sm.style.overflow = "auto";
    
  }
})