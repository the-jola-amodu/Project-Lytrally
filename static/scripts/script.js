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
let signUpLink = document.getElementById("signUp");
let cardOverlay = document.querySelector(".overlay");
let signinSignupContainer = document.getElementById("signIn_signUp");
let signinSigiupHeader = document.getElementById("signin_sigiup_header");
let googleBtn = document.getElementById("google_btn");
let googleBtnText = document.querySelector(".googleBtnText");
let facebookBtn = document.getElementById("facebook_btn");
let facebookBtnText = document.querySelector(".facebookBtnText");
let emailInput = document.getElementById("email");
let emailInputLabel = document.getElementById("emailLabel");
let passwordInput = document.getElementById("password");
let passwordInputLabel = document.getElementById("passwordLabel");
let rememberMe = document.querySelector(".check_forgot");
let forgotPassword = document.getElementById("forgotPassword");
let submitBtn = document.getElementById("submit");
let noAccount = document.querySelector(".noAccount");
let confirmPassword = document.getElementById("confirmPassword");
let confirmPasswordLabel = document.getElementById("confirmPasswordLabel");
let privacyPolicy = document.querySelector(".privacyPolicy");
let signUpsignIn = document.querySelector(".signUpsignIn");

let signIn = () =>
{
  navDisplay.style.display = "none";
  overlay.style.display = "none";
  navDisplay.style.height = "0px";
  navDisplay.style.paddingBlock = "0px";
  signinSignupContainer.style.display = "block";
  signinSigiupHeader.innerHTML = "Sign in into your Lytrally account";
  submitBtn.innerHTML = "Sign In";
  confirmPassword.style.display = "none";
  confirmPasswordLabel.style.display = "none"
  privacyPolicy.style.display = "none";
  signUpsignIn.style.display = "none";
  rememberMe.style.display = "block";
  forgotPassword.style.display = "block";
  noAccount.style.display = "block";
}

let signUp = () =>
{
  navDisplay.style.display = "none";
  overlay.style.display = "none";
  navDisplay.style.height = "0px";
  navDisplay.style.paddingBlock = "0px";
  signinSignupContainer.style.display = "block";
  signinSigiupHeader.innerHTML = "Create your lytrally account";
  submitBtn.innerHTML = "Sign Up";
  confirmPasswordLabel.style.display = "block";
  confirmPassword.style.display = "block";
  privacyPolicy.style.display = "block";
  signUpsignIn.style.display = "block";
  rememberMe.style.display = "none";
  forgotPassword.style.display = "none";
  noAccount.style.display = "none";
}

let close_signIn_signUp_card = () =>
{
  navDisplay.style.display = "none";
  overlay.style.display = "none";
  navDisplay.style.height = "0px";
  navDisplay.style.paddingBlock = "0px";
  signinSignupContainer.style.display = "none";
}

window.addEventListener('load', () => {
  if (screenWidth < 1024)
  {
    googleBtnText.innerHTML = "Google";
    facebookBtnText.innerHTML = "Facebook";
  }
  // else
  // {
  //   googleBtn.style.width = "100%";
  //   googleBtn.stylefloat = "none";
  //   googleBtn.style.marginRight = 0;
  //   facebookBtn.style.width = "100%";
  // }
})

// function googleBtnHoverIn() {
//   // Change styles when mouse enters
//   googleBtn.style.width = "80%";
//   googleBtnText.innerHTML = "Continue with Google";
//   googleBtn.style.marginRight = "5%";
//   facebookBtn.style.width = "15%";
//   facebookBtnText.innerHTML = "";
// }

// function googleBtnHoverOut() {
//   // Revert styles when mouse leaves
//   googleBtn.style.width = "47.5%";
//   googleBtnText.innerHTML = "Google";
//   googleBtn.style.marginRight = "5%";
//   facebookBtn.style.width = "47.5%";
//   facebookBtnText.innerHTML = "Facebook";
// }

// googleBtn.addEventListener("mouseenter", googleBtnHoverIn);
// googleBtn.addEventListener("mouseleave", googleBtnHoverOut);

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