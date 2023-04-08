const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function return_important() {
const completion = await openai.createCompletion({
model: "text-davinci-003",
prompt: "make a poem about food",
max_tokens: 500,
});

return completion.choices[0].text.trim();

}

async function main() {
const response = await return_important();
console.log(response);
}

main();