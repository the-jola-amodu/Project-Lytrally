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

// This code displays the features list
let featuresDisplay = document.getElementById('featuresDisplay');
let lists = document.getElementById('lists');
let closeDisplay = document.getElementById('closeDisplay');
let features = () => {
    lists.style.height = "100%";
}
let closeFeatures = () => {
    lists.style.height = "0"
}

const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
window.addEventListener("load", () => {
    console.log
})