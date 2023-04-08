const mainP = require('./getpassage.js');
const { Configuration, OpenAIApi } = require("openai");
const passage = mainP
const configuration = new Configuration({
apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function return_important() {
const completion = await openai.createCompletion({
model: "text-davinci-003",
prompt: "return the following passage back but highlight the important parts by surrounding the text in **" + passage,
temperature: 0,
max_tokens: 200,
});
console.log(completion.data.choices[0].text);
}

return_important();