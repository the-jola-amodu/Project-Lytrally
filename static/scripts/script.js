// This code opens and closes the dropdown
let hambuger = document.getElementById('openNav');
let navDisplay = document.querySelector('.navDisplay');
let openNavBar = () => {
    navDisplay.style.height = "300px";
    navDisplay.style.paddingBlock = "32px";
}
let closeNavBar = () => {
    navDisplay.style.height = "0px";
    navDisplay.style.paddingBlock = "0px";
}

// This code allows the get started button to navigate to the signup page
let getStarted = document.getElementById('getStarted');
getStarted.addEventListener("click", () => {
    window.location.href = "signup.html";
})