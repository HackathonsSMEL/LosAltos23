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
const mainp = "The story moves back to eleven months earlier, June 1996. Mia Warren, an artist, and her fifteen-year-old daughter, Pearl, move into the upstairs floor of Mrs. Richardson’s rental property. The wealthy Richardsons don’t need the rental income, but Mrs. Richardson rents to people she feels are needy and deserving. Mia and Pearl soon learn the many rules that regulate life in Shaker Heights. They do not have much money and so also learn where they can buy things on discount and pick up discarded belongings."
module.exports = mainp;