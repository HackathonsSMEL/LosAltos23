/*  // get the currently active tab
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
});  */
const mainp = "I resisted all the way: a new thing for me, and a circumstance which greatly strengthened the bad opinion Bessie and Miss Abbot were disposed to entertain of me. The fact is, I was a trifle beside myself; or rather OUT of myself, as the French would say: I was conscious that a moment's mutiny had already rendered me liable to strange penalties, and, like any other rebel slave, I felt resolved, in my desperation, to go all lengths."
module.exports = mainp;