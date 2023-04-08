//getting the variables
const mainP = require('./getpassage.js');
const api = require('./config.js');

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
prompt: "return the following passage back but highlight the important parts by surrounding the text in **" + passage,
temperature: 0,
max_tokens: 200,
});
console.log(completion.data.choices[0].text);
}

//run "return_important"
return_important();