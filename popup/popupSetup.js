document.addEventListener("DOMContentLoaded", function () {
  const formattingText = document.getElementById("changing-text");
  const hcheck = document.getElementById("h");
  const ucheck = document.getElementById("u");
  const bcheck = document.getElementById("b");
  const highlightCheckbox = document.querySelector("input[value='highlight']");
  const underlineCheckbox = document.querySelector("input[value='underline']");
  const boldCheckbox = document.querySelector("input[value='bold']");
  let formattedText = "Make reading immersive and practical!";
  let formattingStyles = "";
  const updateFormatting = () => {
    if (highlightCheckbox.checked) {
      const highlightColor = document.querySelector(
        "[data-formatting-option='highlight']"
      ).value;
      formattingStyles += `background-color:${highlightColor};`;
    }
    if (underlineCheckbox.checked) {
      const underlineColor = document.querySelector(
        "[data-formatting-option='underline']"
      ).value;
      formattingStyles += `text-decoration:underline; text-decoration-color:${underlineColor};`;
    }
    if (boldCheckbox.checked) {
      const textColor = document.querySelector(
        "[data-formatting-option='bold']"
      ).value;
      formattingStyles += `color:${textColor};font-weight:bold;`;
    }
    formattedText = `<span style="${formattingStyles}">${formattedText}</span>`;
    formattingText.innerHTML = formattedText;
  };

  hcheck.addEventListener("change", (event) => {
    if (
      highlightCheckbox.checked ||
      underlineCheckbox.checked ||
      boldCheckbox.checked
    ) {
      updateFormatting();
    } else {
      formattedText = "Make reading immersive and practical!";
      formattingStyles = "";
      formattingText.innerHTML = formattedText;
    }
  });

  ucheck.addEventListener("change", (event) => {
    if (
      highlightCheckbox.checked ||
      underlineCheckbox.checked ||
      boldCheckbox.checked
    ) {
      updateFormatting();
    } else {
      formattedText = "Make reading immersive and practical!";
      formattingStyles = "";
      formattingText.innerHTML = formattedText;
    }
  });

  bcheck.addEventListener("change", (event) => {
    if (
      highlightCheckbox.checked ||
      underlineCheckbox.checked ||
      boldCheckbox.checked
    ) {
      updateFormatting();
    } else {
      formattedText = "Make reading immersive and practical!";
      formattingStyles = "";
      formattingText.innerHTML = formattedText;
    }
  });
});
