const { Configuration, OpenAIApi } = require("openai");
const passage = "The story moves back to eleven months earlier, June 1996. Mia Warren, an artist, and her fifteen-year-old daughter, Pearl, move into the upstairs floor of Mrs. Richardson’s rental property. The wealthy Richardsons don’t need the rental income, but Mrs. Richardson rents to people she feels are needy and deserving. Mia and Pearl soon learn the many rules that regulate life in Shaker Heights. They do not have much money and so also learn where they can buy things on discount and pick up discarded belongings. "
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