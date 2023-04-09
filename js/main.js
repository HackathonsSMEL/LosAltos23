//configuring openAIapikey
const { Configuration, OpenAIApi } = require("openai");
const passage = mainP
const configuration = new Configuration({
apiKey: api,
});
const openai = new OpenAIApi(configuration);

//function to return the passage with the most important parts "highlighted"
async function return_important() {
const completion = await openai.createCompletion({
model: "text-davinci-003",
prompt: "return only the parts of the passage, 2 - 5 words, that are important in one line seperated by a newline" + passage,
temperature: 0,
max_tokens: 200,
});
console.log(completion.data.choices[0].text);
return(completion.data.choices[0].text);
}

 function highlightImportantParts() {
    const text = mainP;
    
    return_important().then(highlights => {
        const highlightedText = text.replace(new RegExp(highlights), applyButtonClickListenerGeneral(highlights));
        //const highlightedText = text.replace(new RegExp(highlights), `|${highlights}|`);
      console.log(highlightedText)
    });
  }

//run "return_important"
highlightImportantParts();



 // get the currently active tab
 
/* for (let i = 0; i < highlights.length; i++) {
  document.addEventListener("DOMContentLoaded", function() {
    const startAnalyze = document.getElementById("startAnalyze");
    startAnalyze.addEventListener("click", function() {
      applyButtonClickListener();
    })})}; */

document.addEventListener("DOMContentLoaded", function() {
const analyzeButton = document.getElementById("analyzeButton");
startAnalyze.addEventListener("click", function() {

})
});




function getpass() {
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

}); 
const mainp = "I resisted all the way: a new thing for me, and a circumstance which greatly strengthened the bad opinion Bessie and Miss Abbot were disposed to entertain of me. The fact is, I was a trifle beside myself; or rather OUT of myself, as the French would say: I was conscious that a moment's mutiny had already rendered me liable to strange penalties, and, like any other rebel slave, I felt resolved, in my desperation, to go all lengths."
module.exports = mainp;
}
