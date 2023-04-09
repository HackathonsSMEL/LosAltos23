/* const mainP = require('./getpassage.js');
const key_words = require('./main.js'); */

//const mainP = "ewifjewpf";
//let key_words = ['ew']
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

let key_words = ["As", "the"];
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
        css: ".underlineFunny {"+innerCSS+" }",
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
  // // const mainP = result[0];

  // // let formattedPassage = "";
  // // let lastIndex = 0;

  // // Search for key words and format their CSS
  // for (const word of key_words) {
  //   // let temp = result;
  //   // while(temp.indexOf(word) !== -1){

  //   // }
  //   // const regex = new RegExp(`\\b${word}\\b`, "gi");
  //   // let match;

  //   // // Look for all matches of the keyword in the text
  //   // while ((match == regex.exec(mainP)) !== null) {
  //   //   console.log(match);
  //   //   const startIndex = match.index;
  //   //   const endIndex = regex.lastIndex;
  //   //   const matchedText = mainP.substring(startIndex, endIndex);

  //   //   const formattedMatch = format(matchedText);
  //   //   const formattedPart =
  //   //     mainP.substring(lastIndex, startIndex) +
  //   //     formattedMatch.formattedMatch;
  //   //   formattedPassage += formattedPart;

  //   //   formattingStyles.push(...formattedMatch.formattingStyles);

  //   //   lastIndex = endIndex;
  //   // }
  // }
  // return "<span class=\"asuoighsifdjggjdfgfgf\">"+result+"</span>";

  // // formattedPassage += mainP.substring(lastIndex);
  // // const formattedHTML = `<p>${formattedPassage}</p>`;

  // // // Send a message to the background script to insert the CSS
  // // chrome.runtime.sendMessage(
  // //   { type: "insertCSS", styles: formattingStyles },
  // //   function (response) {
  // //     if (chrome.runtime.lastError) {
  // //       console.error(chrome.runtime.lastError);
  // //     } else {
  // //       // Inject the formatted HTML into the current tab
  // //       chrome.tabs.executeScript(tabId, {
  // //         code: `document.body.innerHTML = '${formattedHTML}';`,
  // //       });
  // //     }
  // //   }
  // // );
}
