let key_words = [
  " remind ",
  " dares ",
  " sense ",
  " suffrage",
  "subarctic",
  "warmer",
  "shrinking",
];
let formattingStyles = [];

document.addEventListener("DOMContentLoaded", function () {
  const analyzeButton = document.getElementById("analyzeButton");
  analyzeButton.addEventListener("click", function () {
    const formattingStyles = [];
    const highlightCheckbox = document.querySelector(
      "input[value='highlight']"
    );
    const underlineCheckbox = document.querySelector(
      "input[value='underline']"
    );
    const boldCheckbox = document.querySelector("input[value='bold']");

    if (highlightCheckbox.checked) {
      const highlightColor = document.querySelector(
        "[data-formatting-option='highlight']"
      ).value;
      formattingStyles.push(`background-color:${highlightColor}`);
    }
    if (underlineCheckbox.checked) {
      const underlineColor = document.querySelector(
        "[data-formatting-option='underline']"
      ).value;
      formattingStyles.push(
        `text-decoration:underline; text-decoration-color:${underlineColor}`
      );
    }
    if (boldCheckbox.checked) {
      const textColor = document.querySelector(
        "[data-formatting-option='bold']"
      ).value;
      formattingStyles.push(`color:${textColor};font-weight:bold`);
    }

    let innerCSS = formattingStyles.join(";");

    // Get the current tab's ID
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tabId = tabs[0].id;

      //console.log(formattingStyles);

      chrome.scripting.insertCSS({
        target: { tabId: tabId },
        css: ".underlineFunny {" + innerCSS + " }",
      });
      // Execute a content script to get the text content of the current tab
      chrome.scripting
        .executeScript({
          args: [key_words],
          target: {
            tabId: tabId,
          },
          func: what,
        })
        .then(() => {
          //console.log("Executed content script");
        });
    });
  });
});

function what(key_words) {
  let text = document.body.innerHTML;
  for (const word of key_words) {
    text = text.replaceAll(
      word,
      '<span class="underlineFunny">' + word + "</span>"
    );
  }
  document.body.innerHTML = text;
}
