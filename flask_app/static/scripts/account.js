let backArrow = document.getElementById("backArrow");
let prevPage = () => {
  window.history.back();
};

// This code toggles the geardropdown
let gear = document.querySelector(".gear")
let gearDropdown = document.querySelector(".gearDropdown");
gear.addEventListener("click", () => {
    if (gearDropdown.style.display === "none")
    {
        gearDropdown.style.display = "flex";
    }
    else {
        gearDropdown.style.display = "none";
    }
})

// This code toggles the notification on and off
let toggle = document.querySelector(".toggle");
let toogleContainer = document.querySelector(".notificationToggle");
toggle.addEventListener("click", () => {
  if (toggle.classList.contains("toggleOn")) {
    toggle.classList.remove("toggleOn");
    toogleContainer.classList.remove("toggleContainerOn");
    toggle.classList.add("toggleOff");
    toogleContainer.classList.add("toggleContainerOff")
  } else {
    toggle.classList.remove("toggleOff");
    toogleContainer.classList.remove("toggleContainerOff");
    toggle.classList.add("toggleOn");
    toogleContainer.classList.add("toggleContainerOn");
  }
});
