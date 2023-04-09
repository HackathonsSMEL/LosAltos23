const mainP = require('./getpassage.js');
const key_words = require('./main.js');

/*
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
  detailedList = mainP;
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
*/

function format(match) {
  const formattingStyles = [];
  const highlightCheckbox = document.querySelector("input[value='highlight']");
  const underlineCheckbox = document.querySelector("input[value='underline']");
  const boldCheckbox = document.querySelector("input[value='bold']");

  if (highlightCheckbox.checked) {
    const highlightColor = document.querySelector("[data-formatting-option='highlight']").value;
    formattingStyles.push(`background-color:${highlightColor}`);
  }
  if (underlineCheckbox.checked) {
    const underlineColor = document.querySelector("[data-formatting-option='underline']").value;
    formattingStyles.push(`text-decoration:underline; text-decoration-color:${underlineColor}`);
  }
  if (boldCheckbox.checked) {
    const textColor = document.querySelector("[data-formatting-option='bold']").value;
    formattingStyles.push(`color:${textColor};font-weight:bold`);
  }

  const formattedMatch = `<span style="${formattingStyles.join(';')}">${match}</span>`;
  return formattedMatch;
}

document.addEventListener("DOMContentLoaded", function() {
const analyzeButton = document.getElementById("analyzeButton");
analyzeButton.addEventListener("click", function() {
  let formattedPassage = '';
  let lastIndex = 0;

  for (const word of key_words) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const match = mainP.match(regex);

    if (match) {
      const formattedMatch = format(match[0]);
      const startIndex = mainP.indexOf(match[0], lastIndex);
      const formattedPart = mainP.substring(lastIndex, startIndex) + formattedMatch;

      formattedPassage += formattedPart;
      lastIndex = startIndex + match[0].length;
    }
  }

  formattedPassage += mainP.substring(lastIndex);
  return `<p>${formattedPassage}</p>`;
})});
