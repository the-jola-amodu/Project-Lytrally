// Gets screen height and width
const screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const screenHeight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

// This code redirect page to account page
let profilePic = document.querySelector(".profilePic");
profilePic.addEventListener('click', () => {
    window.location.href = '/templates/account.html';
});

// This code displays the features list
let featuresDisplay = document.getElementById("featuresDisplay");
let lists = document.querySelector(".listDisplay");
let closeDisplay = document.getElementById("header");
let features = () => {
  if (lists.style.height === "100%")
  {
    lists.style.height = 0;
  }
  else
  {
    languages.style.display = "none";
    lists.style.height = "100%";
  }
}

let closeFeatures = () => {
  lists.style.height = 0;
}

// This code changes the visible part of the display list and also changes the features section based on the selected feature
let visibleFeature = document.getElementById("visibleFeature");
let featuresLinks = document.querySelectorAll(".featuresLink");

let clickedLink = null; // Store the clicked element

featuresLinks.forEach(link => {
  link.addEventListener('click', () => {
    linkIndex = Array.from(featuresLinks).indexOf(link);

    if (screenWidth < 720) {
      visibleFeature.innerHTML = link.innerHTML;
      lists.style.height = 0;
    }

    if (screenWidth > 720) {
      featuresLinks.forEach(otherLink => {
        // otherLink.style.backgroundColor = "#F3F6FC";
        otherLink.style.backgroundColor = "#dbd7d7";
        otherLink.style.fontWeight = "normal";
        otherLink.style.color = "#000";
      });

      link.style.backgroundColor = "#8A9AC5";
      link.style.fontWeight = "bold";
      link.style.color = "#F3F6FC";

      clickedLink = link; // Store the clicked element
    }
  });

  link.addEventListener('mouseover', () => {
    if (link !== clickedLink) {
      link.style.backgroundColor = "#8A9AC5";
      link.style.fontWeight = "bold";
      link.style.color = "#F3F6FC";
    }
  });

  link.addEventListener('mouseout', () => {
    if (link !== clickedLink) {
    //   link.style.backgroundColor = "#F3F6FC";
        link.style.backgroundColor = "#dbd7d7";
        link.style.fontWeight = "normal";
        link.style.color = "#000";
    }
  });
});

// This code handles the language dropdown
let languageDisplay = document.querySelector(".languageDisplay");
let languages = document.querySelector(".languages");
let langs = document.querySelectorAll(".lang");
let langDisplay = document.querySelector(".langDisplay");

languageDisplay.addEventListener('click', () => {
    if (languages.style.display === "none")
    {
        languages.style.display = "flex";
        lists.style.height = 0;
    }
    else
    {
        languages.style.display = "none";
    }
})

langs.forEach(lang => {
    lang.addEventListener('click', () => {
        langDisplay.innerHTML = lang.innerHTML;
        languages.style.display = "none";
    })
})