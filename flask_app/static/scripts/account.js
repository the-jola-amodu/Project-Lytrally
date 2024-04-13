let backArrow = document.getElementById("backArrow");
let prevPage = () => {
  window.history.back();
};

// This code toggles the display of the update form
let updateLink = document.querySelector(".update");
let updateFormDisplay = document.querySelector(".profileForm");
let closeForm = document.querySelector(".closeForm");
// Displayys and undisplay the form
updateLink.addEventListener("click", () => {
  if (updateFormDisplay.style.display === "none") {
    updateFormDisplay.style.display = "flex";
  } else {
    updateFormDisplay.style.display = "none";
  }
});
// Closes the form
closeForm.addEventListener("click", () => {
  updateFormDisplay.style.display = "none";
});
