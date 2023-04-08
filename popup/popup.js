const applyButton = document.getElementById("applyButton");
applyButton.addEventListener("click", function() {
  function changeParagraphText() {
    const myParagraph = document.getElementById("my-paragraph");
    myParagraph.innerText = "hello";
  }
  
  // Call the function to change the paragraph text to "hello"
  changeParagraphText();
});


  /*const formattingText = document.getElementById("formatting-text");
  const highlightCheckbox = document.querySelector("input[value='highlight']");
  const underlineCheckbox = document.querySelector("input[value='underline']");
  const boldCheckbox = document.querySelector("input[value='bold']");
  let formattedText = ":";
  //let formattedText = "Formatting:";
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
    let formattedText = "p";
    //formattedText = `<span style="${formattingStyles}">${formattedText}</span>`;
  }
  formattingText.innerHTML = formattedText;
  //formattingText.innerHTML = formattedText;
  console.log(formattedText);
});*/
