import { return_important } from './main.js';
const mainP = require('./getpassage.js');

const formattingText = document.getElementById("formatting-text");
const hcheck = document.getElementById("h");
const ucheck = document.getElementById("u");
const bcheck = document.getElementById("b");
const highlightCheckbox = document.querySelector("input[value='highlight']");
const underlineCheckbox = document.querySelector("input[value='underline']");
const boldCheckbox = document.querySelector("input[value='bold']");

document.addEventListener("DOMContentLoaded", function() {
  const formattingText = document.getElementById("formatting-text");
  const hcheck = document.getElementById("h");
  const ucheck = document.getElementById("u");
  const bcheck = document.getElementById("b");
  const highlightCheckbox = document.querySelector("input[value='highlight']");
  const underlineCheckbox = document.querySelector("input[value='underline']");
  const boldCheckbox = document.querySelector("input[value='bold']");
  let formattedText = "Formatting:";
  let formattingStyles = "";
  const updateFormatting = () => {
    if (highlightCheckbox.checked) {
      const highlightColor = document.querySelector("[data-formatting-option='highlight']").value;
      formattingStyles += `background-color:${highlightColor};`;
    }
    if (underlineCheckbox.checked) {
      const underlineColor = document.querySelector("[data-formatting-option='underline']").value;
      formattingStyles += `text-decoration:underline; text-decoration-color:${underlineColor};`;
    }
    if (boldCheckbox.checked) {
      const textColor = document.querySelector("[data-formatting-option='bold']").value;
      formattingStyles += `color:${textColor};font-weight:bold;`;
    }
    formattedText = `<span style="${formattingStyles}">${formattedText}</span>`;
    formattingText.innerHTML = formattedText;
  };

  hcheck.addEventListener('change', (event) => {
    if (highlightCheckbox.checked || underlineCheckbox.checked || boldCheckbox.checked) {
      updateFormatting();
    } else {
      formattedText = "Formatting:";
      formattingStyles = "";
      formattingText.innerHTML = formattedText;
    }
  });

  ucheck.addEventListener('change', (event) => {
    if (highlightCheckbox.checked || underlineCheckbox.checked || boldCheckbox.checked) {
      updateFormatting();
    } else {
      formattedText = "Formatting:";
      formattingStyles = "";
      formattingText.innerHTML = formattedText;
    }
  });

  bcheck.addEventListener('change', (event) => {
    if (highlightCheckbox.checked || underlineCheckbox.checked || boldCheckbox.checked) {
      updateFormatting();
    } else {
      formattedText = "Formatting:";
      formattingStyles = "";
      formattingText.innerHTML = formattedText;
    }
  });
}); 

function format(passageText) {
  const formattingText = document.getElementById("formatting-text");
  const hcheck = document.getElementById("h");
  const ucheck = document.getElementById("u");
  const bcheck = document.getElementById("b");
  const highlightCheckbox = document.querySelector("input[value='highlight']");
  const underlineCheckbox = document.querySelector("input[value='underline']");
  const boldCheckbox = document.querySelector("input[value='bold']");
  formattingText = i;
  formattingStyles = "";
  const updateFormatting = () => {
    if (highlightCheckbox.checked) {
      const highlightColor = document.querySelector("[data-formatting-option='highlight']").value;
      formattingStyles += `background-color:${highlightColor};`;
    }
    if (underlineCheckbox.checked) {
      const underlineColor = document.querySelector("[data-formatting-option='underline']").value;
      formattingStyles += `text-decoration:underline; text-decoration-color:${underlineColor};`;
    }
    if (boldCheckbox.checked) {
      const textColor = document.querySelector("[data-formatting-option='bold']").value;
      formattingStyles += `color:${textColor};font-weight:bold;`;
    }
    formattedText = `<span style="${formattingStyles}">${formattedText}</span>`;
    formattingText.innerHTML = formattedText;
  };

  hcheck.addEventListener('change', (event) => {
    if (highlightCheckbox.checked || underlineCheckbox.checked || boldCheckbox.checked) {
      updateFormatting();
    } else {
      formattedText = "Formatting:";
      formattingStyles = "";
      formattingText.innerHTML = formattedText;
    }
  });

  ucheck.addEventListener('change', (event) => {
    if (highlightCheckbox.checked || underlineCheckbox.checked || boldCheckbox.checked) {
      updateFormatting();
    } else {
      formattedText = "Formatting:";
      formattingStyles = "";
      formattingText.innerHTML = formattedText;
    }
  });

  bcheck.addEventListener('change', (event) => {
    if (highlightCheckbox.checked || underlineCheckbox.checked || boldCheckbox.checked) {
      updateFormatting();
    } else {
      formattedText = "Formatting:";
      formattingStyles = "";
      formattingText.innerHTML = formattedText;
    }
  });
}


document.addEventListener("DOMContentLoaded", function() {
const analyzeButton = document.getElementById("analyzeButton");
analyzeButton.addEventListener("click", function() {
  detailedList = return_important();
  const passageText = document.getElementById("passage-text").innerHTML;
  let formattedText = passageText;
  for (const word of detailedList) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    formattedText = formattedText.replace(regex, match => {
      return format(match);
    });
  }
  document.getElementById("passage-text").innerHTML = formattedText;
})});
