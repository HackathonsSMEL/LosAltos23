//configuring openAIapikey
const mainP = require('./getpassage.js');
const api = require('./config.js');
const { Configuration, OpenAIApi } = require("openai");
const passage = mainP
const configuration = new Configuration({
apiKey: api,
});
const openai = new OpenAIApi(configuration);

//function to return the passage with the most important parts "highlighted"
async function return_important() {
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
return importantWords;

//return(completion.data.choices[0].text);
}



/* function highlightImportantParts() {
  const text = mainP;
  return_important().then(highlights => {
      const highlightedText = text.replace(new RegExp(highlights), `|${highlights}|`);
    console.log(highlightedText)
  });
} */
/* async function logImportantWords() {
  const importantWords = await return_important();
  for (let i = 0; i < importantWords.length; i++) {
    console.log(`Value ${i +1}: ${importantWords[i]}`);
  }
  return importantWords;
} */
//run "return_important"

return_important();