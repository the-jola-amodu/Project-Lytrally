const screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const screenHeight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

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
  if (screenWidth < 1025)
  {
    googleBtnText.innerHTML = "Google";
    facebookBtnText.innerHTML = "Facebook";
  }
  else
  {
    googleBtnText.innerHTML = "Continue with Google";
    facebookBtnText.innerHTML = "Continue with Facebook";
    // googleBtn.style.width = "100%";
    // googleBtn.stylefloat = "none";
    // googleBtn.style.marginRight = 0;
    // facebookBtn.style.width = "100%";
  }
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


// The code below handles error messages to be displayed on submitting the form
const loginForm = document.getElementById('login_Form');
let username = document.getElementById("username").value;
let password = document.querySelector("#password").value;
let unameError = document.querySelector('.unameError')
let passwordError = document.querySelector('.passwordError');

const re_email = /^[A-Za-z0-0&-_]+@[A-Za-z0-9]+[A-Za-z0-9]{2,4}$/;
const re_uname = /^[A-Za-z0-9]+_\d+$/;
const re_password = /^(?=.*[!@_-])[\w.!@_-]{8,}$/;

loginForm.addEventListener('submit', function(event) {
    if (!re_uname.test(username)) {
        unameError.style.display = 'block';
        event.preventDefault();
    }
    else if (!re_password.test(password)) {
        passwordError.style.display = 'block';
        event.preventDefault();
    }
    else {
        unameError.style.display = 'none';
        password.style.display = 'none';
        window.alert("You have successfully signed in")
        window.location.href = './index.html'
    }
})