//configuring openAIapikey
const api = require('./config.js');;
/* const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
apiKey: api,
}); 
const openai = new OpenAIApi(configuration);*/

const getPostTitles = require('./getpassage.js');


let passage;

getPostTitles().then((postTitle) => {
	console.log(postTitle);
  passage = postTitle;
  //function to return the passage with the most important parts "highlighted"
  async function return_important() {
    const importantWords = [];
    const PROMPT = "return only the parts of the passage, 2 - 5 words, that are important in one line seperated by a newline" + passage;
    const MAX_TOKENS = 200;

/*     const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "return only the parts of the passage, 2 - 5 words, that are important in one line seperated by a newline" + passage,
    temperature: 0,
    max_tokens: 200,
    }); */
    const response = await fetch(`https://api.openai.com/v1/engines/text-davinci-003/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api}`
      },
      body: JSON.stringify({
        prompt: PROMPT,
        max_tokens: MAX_TOKENS,
        n: 1,
        stop: '',
        temperature: 0.5
      })
    });
    const completion = await response.json();
  
    const text = completion.choices[0].text;
    const lines = text.split('\n');
    lines.forEach(line => importantWords.push(line));
    importantWords.splice(0,2);
    console.log(completion.choices[0].text);
    return importantWords;
  }
  return_important();
	// Use the postTitle value here
}).catch((error) => {
	console.error(error);
});

