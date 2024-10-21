

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
const tools_l = document.getElementById("tools")
featuresHamburger.addEventListener("click", () => {
  if (featuresHamburger.checked) {
    console.log("featuresHamburger checked");
    featuresNavDisplay.classList.add("show");
  } else {
    console.log("featuresHamburger unchecked");
    featuresNavDisplay.classList.remove("show");
    tools.classList.remove("show")
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

// This code displays the features list
let featuresDisplay = document.getElementById("featuresDisplay");
let lists = document.querySelector(".listDisplay");
let closeDisplay = document.getElementById("header");
let featureSection = document.querySelector(".featuresSection");
featuresDisplay.addEventListener("click", () => {
  if (lists.style.height === "auto") {
    lists.style.height = 0;
  } else {
    lists.style.height = "auto";
    languages.style.display = "none";
    gclanguages.style.display = "none";
    ralanguages.style.display = "none";
  }
});
lists.addEventListener("click", () => {
  languages.style.display = "none";
  gclanguages.style.display = "none";
  ralanguages.style.display = "none";
});
featureSection.addEventListener("click", () => {
  if (lists.style.height === "auto") {
    lists.style.height = 0;
  }
});
closeDisplay.addEventListener("click", () => {
  if (lists.style.height === "auto") {
    lists.style.height = 0;
  }
});

// This code closes the features dropdown when click outside the feature section
let closeFeatures = () => {
  if (screenWidth < 720) {
    lists.style.height = 0;
  }
};

// This code closes the features dropdown on clicking a feature
// It changes the visible part of the display list and also changes the features section based on the selected feature
let visibleFeature = document.getElementById("visibleFeature");
let featuresLinks = document.querySelectorAll(".feature");
// Adds the currentFeature class to the first item on the page loading
window.addEventListener("load", () => {
  featuresLinks[0].classList.add("activeToggle");
});
// Adds the currentFeature class to the clicked feature and removes it from others
featuresLinks.forEach((feature) => {
  feature.addEventListener("click", () => {
    featuresLinks.forEach((feature) => {
      if (feature.classList.contains("activeToggle")) {
        feature.classList.remove("activeToggle");
      }
    });
    feature.classList.add("activeToggle");
  });
});

// Changes the content of the current feature display
featuresLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (screenWidth < 720) {
      visibleFeature.innerHTML = link.innerHTML;
      lists.style.height = 0;
    }
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
