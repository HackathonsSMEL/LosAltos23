const axios = require("axios");
const cheerio = require("cheerio");

const getPostTitles = async () => {
  try {
    const { data } = await axios.get(
      "https://www.gutenberg.org/files/1260/1260-h/1260-h.htm"
    );
    const $ = cheerio.load(data);
    const postTitles = [];

    $("div > p").each((_idx, el) => {
      const postTitle = $(el).text();
      postTitles.push(postTitle);
    });

    return postTitles[0];
  } catch (error) {
    throw error;
  }
};
/* 
getPostTitles()
.then((postTitles) => {
  const titlesArray = postTitles;
  console.log(titlesArray);
}); */

module.exports = getPostTitles;
