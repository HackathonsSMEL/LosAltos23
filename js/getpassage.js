/* // get the currently active tab
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // get the tab's DOM content
    chrome.tabs.executeScript(tabs[0].id, {code: "document.body.innerHTML"}, function(results) {
      // extract the HTML content from the DOM
      var html = results[0];
  
      // create a new DOM element to hold the HTML content
      var el = document.createElement('html');
      el.innerHTML = html;
  
      // define the selectors for the elements that typically contain the main passage
      var selectors = [
        'article',
        '#main',
        '#content',
        '.post',
        '.entry-content'
      ];
  
      // iterate through the selectors and try to find the main passage
      var mainPassage = '';
      for (var i = 0; i < selectors.length; i++) {
        var elements = el.querySelectorAll(selectors[i]);
        if (elements.length > 0) {
          mainPassage = elements[0].innerText;
          break;
        }
      }
  
      // output the main passage to the console
      //console.log(mainPassage);
  });
}); */
const mainp = "Do not share your API key with others, or expose it in the browser or other client-side code. In order to protect the security of your account, OpenAI may also automatically rotate any API key that we've found has leaked publicly."
module.exports = mainp;