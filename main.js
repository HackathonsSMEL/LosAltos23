//configuring openAIapikey
const api = require('./js/config.js');

/* // Create an empty string to store highlighted text
console.log("efwoinewoewi");
var highlightedText = '';

// Function to handle mouseup event
const highlightText=()=> {
    highlightedText = '';
  // Get the highlighted text and append it to the existing highlightedText string
  var text = window.getSelection().toString();
  if (text != "") {
    var text = document.getSelection().text;
  }
    highlightedText += text; // add a newline character to separate multiple highlights
    console.log(highlightedText);
}

// Add event listeners to daetect mouseup and mousedown events
document.addEventListener('mouseup', highlightText); */




//const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
apiKey: api,
});
const openai = new OpenAIApi(configuration);

//function to return the passage with the most important parts "highlighted"
async function return_important() {
const highlightedText = await require('./js/test.js');
const passage = highlightedText;
const importantWords = [];
const completion = await openai.createCompletion({
model: "text-davinci-003",
prompt: "return only the parts of the passage, 2 - 5 words, that are important in one line seperated by a newline" + passage,
temperature: 0,
max_tokens: 200,
});

const text = completion.data.choices[0].text;
const lines = text.split('\n');
lines.forEach(line => importantWords.push(line));
importantWords.splice(0,2);
console.log(completion.data.choices[0].text);
return importantWords;

}

/* function highlightImportantParts() {
  const text = mainP;
  return_important().then(highlights => {
      const highlightedText = text.replace(new RegExp(highlights), `|${highlights}|`);
    console.log(highlightedText)
  });
} 
/* async function logImportantWords() {
  const importantWords = await return_important();
  for (let i = 0; i < importantWords.length; i++) {
    console.log(`Value ${i +1}: ${importantWords[i]}`);
  }
  return importantWords;
} */
//run "return_important"

return_important();