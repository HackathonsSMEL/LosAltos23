/* function getpass() {
    console.log("poo");
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
        console.log(mainPassage);
    });
    
    });  */
    const mainp = "My name is Sanjay Mukhyala, and I am the president and founder of San Mateo High School’s computer science club (SMHS Codes). We are a club of passionate coders of varying skill levels who meet once a week to learn about computer science, participate in fun activities, and code our own unique projects. I started this club in the fall of 2022 and we’ve experienced great success in several outreach events across the year and school-wide activities."
    module.exports = mainp;
    
    