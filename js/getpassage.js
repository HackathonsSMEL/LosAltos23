// Create an empty string to store highlighted text
var highlightedText = '';

// Add event listeners to detect mouseup and mousedown events
document.addEventListener('mouseup', highlightText);
document.addEventListener('mousedown', clearHighlight);

// Function to handle mouseup event
function highlightText() {
  // Get the highlighted text and append it to the existing highlightedText string
  var text = window.getSelection().toString();
    highlightedText += text; // add a newline character to separate multiple highlights
    // Save the string to Chrome storage
    chrome.storage.local.set({'highlightedText': highlightedText});
}
highlightText();
module.exports = highlightedText;


// Function to handle mousedown event
function clearHighlight() {
  // Clear the highlightedText string and remove it from Chrome storage
  highlightedText = '';
  chrome.storage.local.remove('highlightedText');
}

/* 
    const mainp = "Do not share your API key with others, or expose it in the browser or other client-side code. In order to protect the security of your account, OpenAI may also automatically rotate any API key that we've found has leaked publicly."
    module.exports = mainp; */
    
    