// This code redirect page to account page
let profilePic = document.querySelector(".profilePic");
profilePic.addEventListener("click", () => {
  window.location.href = "/account";
});

// Handles features list dropdown and featuresHamburger actions
const featuresHamburger = document.querySelector(".features_menu_toggle");
const featuresNavDisplay = document.querySelector(".featuresDisplay");
const toolsToggle = document.querySelector(".toolsToggle");
const toolsToggle_l = document.getElementById("toolsToggle");
const tools = document.querySelector(".tools");
const tools_l = document.getElementById("tools");
featuresHamburger.addEventListener("click", () => {
  if (featuresHamburger.checked) {
    console.log("featuresHamburger checked");
    featuresNavDisplay.classList.add("show");
  } else {
    console.log("featuresHamburger unchecked");
    featuresNavDisplay.classList.remove("show");
    tools.classList.remove("show");
  }
});

toolsToggle.addEventListener("click", () => {
  if (tools.classList.contains("show")) {
    tools.classList.remove("show");
  } else {
    tools.classList.add("show");
  }
});

toolsToggle_l.addEventListener("click", () => {
  if (tools_l.classList.contains("show")) {
    tools_l.classList.remove("show");
  } else {
    tools_l.classList.add("show");
  }
});

// Script to handle nav link action on clicking
const share = document.querySelectorAll(".share")
const features = document.querySelectorAll(".featureSection");

share.forEach((share) => {
  share.addEventListener("click", () => {
    console.log("click")
    features.forEach((feature) => {
      feature.classList.remove("show");
    });
    features[7].classList.add("show");
    featuresNavDisplay.classList.remove("show");
  });
})

// Scripts for features change
const features_l = document.querySelectorAll(".feature_l");
const features_s = document.querySelectorAll(".feature");

window.addEventListener("DOMContentLoaded", () => {
  features[0].classList.add("show");
});

features_s.forEach((feature, index) => {
  feature.addEventListener("click", () => {
    features.forEach((feature) => {
      feature.classList.remove("show");
    });
    features_s.forEach((feature) => {
      feature.classList.remove("currentFeature");
    });
    feature.classList.add("currentFeature");
    features[index].classList.add("show");
    featuresNavDisplay.classList.remove("show");
    tools.classList.remove("show");
    featuresHamburger.checked = false;
  });
});

features_l.forEach((feature_l, index) => {
  feature_l.addEventListener("click", () => {
    features.forEach((feature) => {
      feature.classList.remove("show");
    });
    features_l.forEach((feature) => {
      feature.classList.remove("currentFeature");
    });
    feature_l.classList.add("currentFeature");
    features[index].classList.add("show");
    featuresNavDisplay.classList.remove("show");
    tools.classList.remove("show");
    tools_l.classList.remove("show")
  });
});

// This code handles the language dropdown for the ghostwritting section
let languageDisplay = document.getElementById("gwLanguageDisplay");
let languages = document.getElementById("gwLanguages");
let langs = document.querySelectorAll(".gwLang");
let langDisplay = document.getElementById("gwLangDisplay");

languageDisplay.addEventListener("click", () => {
  if (languages.style.display === "none") {
    languages.style.display = "flex";
    if (screenWidth < 720) {
      lists.style.height = 0;
    }
  } else {
    languages.style.display = "none";
  }
});

langs.forEach((lang) => {
  lang.addEventListener("click", () => {
    langDisplay.innerHTML = lang.innerHTML;
    languages.style.display = "none";
  });
});

// This code handles the language dropdown for the Generate Content section
let gclanguageDisplay = document.getElementById("gcLanguageDisplay");
let gclanguages = document.getElementById("gcLanguages");
let gclangs = document.querySelectorAll(".gcLang");
let gclangDisplay = document.getElementById("gcLangDisplay");

gclanguageDisplay.addEventListener("click", () => {
  if (gclanguages.style.display === "none") {
    gclanguages.style.display = "flex";
    if (screenWidth < 720) {
      lists.style.height = 0;
    }
  } else {
    gclanguages.style.display = "none";
  }
});

gclangs.forEach((lang) => {
  lang.addEventListener("click", () => {
    gclangDisplay.innerHTML = lang.innerHTML;
    gclanguages.style.display = "none";
  });
});

// This code handles the language dropdown for the Reaearch Analysis section
let ralanguageDisplay = document.getElementById("raLanguageDisplay");
let ralanguages = document.getElementById("raLanguages");
let ralangs = document.querySelectorAll(".raLang");
let ralangDisplay = document.getElementById("raLangDisplay");

ralanguageDisplay.addEventListener("click", () => {
  if (ralanguages.style.display === "none") {
    ralanguages.style.display = "flex";
    if (screenWidth < 720) {
      lists.style.height = 0;
    }
  } else {
    ralanguages.style.display = "none";
  }
});

ralangs.forEach((lang) => {
  lang.addEventListener("click", () => {
    ralangDisplay.innerHTML = lang.innerHTML;
    ralanguages.style.display = "none";
  });
});

// This code handles the language dropdown for the Summary and Parapharasing section
let srlanguageDisplay = document.getElementById("srLanguageDisplay");
let srlanguages = document.getElementById("srLanguages");
let srlangs = document.querySelectorAll(".raLang");
let srlangDisplay = document.getElementById("srLangDisplay");

srlanguageDisplay.addEventListener("click", () => {
  if (srlanguages.style.display === "none") {
    srlanguages.style.display = "flex";
    if (screenWidth < 720) {
      lists.style.height = 0;
    }
  } else {
    srlanguages.style.display = "none";
  }
});

srlangs.forEach((lang) => {
  lang.addEventListener("click", () => {
    srlangDisplay.innerHTML = lang.innerHTML;
    srlanguages.style.display = "none";
  });
});

// This code changes the bordercolor for the ghostwritting textarea
let textArea = document.querySelector(".ghostWritingInput");
let textAreaBorder = document.querySelector(".textInputForm");
textAreaBorder.addEventListener("click", () => {
  textAreaBorder.style.borderColor = "#8a9ac5";
});

// This code adds and removes class from a tool when it is clicked
let gwtool = document.querySelectorAll(".tool");
gwtool.forEach((tool) => {
  tool.addEventListener("click", () => {
    if (tool.classList.contains("active-tool")) {
      console.log(true);
      tool.classList.remove("active-tool");
    } else {
      console.log(false);
      tool.classList.add("active-tool");
    }
  });
});

// This code display the users prompt
let prompt = document.getElementById("ideaPrompt");
let promptDisplay = document.querySelector(".messageDisplay");

prompt.addEventListener("keyDown", () => {
  promptDisplay.style.innerHTML = prompt.value;
});

// This code toggles and style the summarize and paraphrase forms
let paraphraseToggle = document.querySelector(".paraphraseToogle");
let summarizeToggle = document.querySelector(".summaryToggle");
let paraphraseForm = document.getElementById("paraphraseForm");
let summaryForm = document.getElementById("summarizeForm");

paraphraseToggle.addEventListener("click", () => {
  summaryForm.style.display = "none";
  paraphraseForm.style.display = "flex";
  if (summarizeToggle.classList.contains("activeToggle")) {
    summarizeToggle.classList.remove("activeToggle");
  }
  paraphraseToggle.classList.add("activeToggle");
});

summarizeToggle.addEventListener("click", () => {
  paraphraseForm.style.display = "none";
  summaryForm.style.display = "flex";
  if (paraphraseToggle.classList.contains("activeToggle")) {
    paraphraseToggle.classList.remove("activeToggle");
  }
  summarizeToggle.classList.add("activeToggle");
});

// This code changes the features
let featureList = document.querySelectorAll(".feature");
let featuresSection = document.querySelectorAll(".featureSection");

featureList.forEach((feature, index) => {
  // Checks if any feature was clicked
  feature.addEventListener("click", () => {
    // Changes the display of all the features to "none"
    featuresSection.forEach((feature) => {
      feature.style.display = "none";
    });
    // Changes the display of the clicked feature
    featuresSection[index].style.display = "block";
  });
});
