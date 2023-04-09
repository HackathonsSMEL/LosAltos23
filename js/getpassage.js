// Create an empty string to store highlighted text
var highlightedText = '';

// Add event listeners to detect mouseup and mousedown events
document.addEventListener('mouseup', highlightText);
document.addEventListener('mousedown', clearHighlight);

// Function to handle mouseup event
function highlightText() {
  // Get the highlighted text and append it to the existing highlightedText string
  var text = window.getSelection().toString();
  if (text != "") {
    var text = document.getSelection().text;
  }
    highlightedText += text; // add a newline character to separate multiple highlights
}
highlightText();
module.exports = highlightedText;


// Function to handle mousedown event
function clearHighlight() {
  // Clear the highlightedText string and remove it from Chrome storage
  highlightedText = '';
}

/* 
    const mainp = "Do not share your API key with others, or expose it in the browser or other client-side code. In order to protect the security of your account, OpenAI may also automatically rotate any API key that we've found has leaked publicly."
    module.exports = mainp; */
    
    