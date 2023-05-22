let key_words = [
  /*" and ",
  " dares ",
  " sense ",
  " suffrage ",
  "subarctic",
  "warmer",
  "shrinking",*/
  return_important()
];
let formattingStyles = [];

document.addEventListener("DOMContentLoaded", function () {
  const analyzeButton = document.getElementById("analyzeButton");
  analyzeButton.addEventListener("click", function () {
    formattingStyles = []; // clear formatting styles before analyzing

    const highlightCheckbox = document.querySelector(
      "input[value='highlight']"
    );
    const underlineCheckbox = document.querySelector(
      "input[value='underline']");
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
      chrome.scripting.insertCSS({
        target: { tabId: tabId },
        css: ".underlineFunny {" + innerCSS + " }",
      });
      // Execute a content script to get the text content of the current tab
      chrome.scripting
        .executeScript({
          args: [key_words, formattingStyles],
          target: {
            tabId: tabId,
          },
          func: what,
        })
        .then(() => {});
    });
  });

  const clearButton = document.getElementById("clearButton");
  clearButton.addEventListener("click", function () {
    // Remove the formatting by removing the inserted CSS
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tabId = tabs[0].id;
      chrome.scripting.insertCSS({
        target: { tabId: tabId },
        css: ".underlineFunny { background-color: transparent; text-decoration: none; color: inherit; font-weight: normal; }",
      });
    });

    // Clear the formatted text on screen
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tabId = tabs[0].id;
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: clearFormatting,
      });
    });

    formattingStyles = []; // clear formatting styles after clearing
  });
});

function what(key_words, formattingStyles) {
  let text = document.body.innerHTML;
  for (const word of key_words) {
    text = text.replaceAll(
      word,
      '<span class="underlineFunny" style="' + formattingStyles.join(";") + '">' +
        word +
        "</span>"
    );
  }
  document.body.innerHTML = text;
}

function clearFormatting() {
  let elements = document.getElementsByClassName("underlineFunny");
  while (elements.length > 0) {
    elements[0].outerHTML = elements[0].innerHTML;
  }
}