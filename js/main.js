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
const completion = await openai.createCompletion({
model: "text-davinci-003",
prompt: "return only the parts of the passage, 2 - 5 words, that are important in one line seperated by a newline" + passage,
temperature: 0,
max_tokens: 200,
});
console.log(completion.data.choices[0].text);
//return(completion.data.choices[0].text);
}

/* function highlightImportantParts() {
  const text = mainP;
  return_important().then(highlights => {
      const highlightedText = text.replace(new RegExp(highlights), `|${highlights}|`);
    console.log(highlightedText)
  });
} */

//run "return_important"
return_important();