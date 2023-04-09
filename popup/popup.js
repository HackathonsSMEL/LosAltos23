document.addEventListener("DOMContentLoaded", function() {
const applyButton = document.getElementById("applyButton");
applyButton.addEventListener("click", function() {
  const formattingText = document.getElementById("formatting-text");
  const highlightCheckbox = document.querySelector("input[value='highlight']");
  const underlineCheckbox = document.querySelector("input[value='underline']");
  const boldCheckbox = document.querySelector("input[value='bold']");
  let formattedText = "Formatting:";
  let formattingStyles = "";
  if (highlightCheckbox.checked) {
    const highlightColor = document.querySelector("[data-formatting-option='highlight']").value;
    formattingStyles += `background-color:${highlightColor};`;
  }
  if (underlineCheckbox.checked) {
    const underlineColor = document.querySelector("[data-formatting-option='underline']").value;
    formattingStyles += `text-decoration:underline ${underlineColor};`;
  }
  if (boldCheckbox.checked) {
    const textColor = document.querySelector("[data-formatting-option='bold']").value;
    formattingStyles += `color:${textColor};font-weight:bold;`;
  }
  if (formattingStyles) {
    formattedText = `<span style="${formattingStyles}">${formattedText}</span>`;
  }
  formattingText.innerHTML = formattedText;
  console.log(formattedText);
});})

export function applyButtonClickListenerGeneral(passage) {
  const formattingText = passage
  const highlightCheckbox = document.querySelector("input[value='highlight']");
  const underlineCheckbox = document.querySelector("input[value='underline']");
  const boldCheckbox = document.querySelector("input[value='bold']");
  let formattedText = "Formatting:";
  let formattingStyles = "";
  if (highlightCheckbox.checked) {
    const highlightColor = document.querySelector("[data-formatting-option='highlight']").value;
    formattingStyles += `background-color:${highlightColor};`;
  }
  if (underlineCheckbox.checked) {
    const underlineColor = document.querySelector("[data-formatting-option='underline']").value;
    formattingStyles += `text-decoration:underline ${underlineColor};`;
  }
  if (boldCheckbox.checked) {
    const textColor = document.querySelector("[data-formatting-option='bold']").value;
    formattingStyles += `color:${textColor};font-weight:bold;`;
  }
  if (formattingStyles) {
    formattedText = `<span style="${formattingStyles}">${formattedText}</span>`;
  }
  formattingText.innerHTML = formattedText;
  console.log(formattedText);
}

document.addEventListener("DOMContentLoaded", function() {
  const applyButton = document.getElementById("applyButton");
  applyButton.addEventListener("click", applyButtonClickListener);
});













document.addEventListener("DOMContentLoaded", function() {
const applyButton = document.getElementById("applyButton");
startAnalyze.addEventListener("click", function() {

})});

