const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function return_important() {
const completion = await openai.createCompletion({
model: "text-davinci-003",
prompt: "return the passage back but highlight the key parts by surrounding it with **",
max_tokens: 500,
});

return completion

}

async function logQuestion() {
const Data = await return_important();
console.log(data.choices[0].text);
}

logQuestion();