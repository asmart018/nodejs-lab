const path = require("path");
const fs = require("fs");
const fetch = require("isomorphic-fetch");

const dataPath = path.join(__dirname, "popular-articles.json");

fetch("https://reddit.com/r/programmingHumor.json")
  .then((res) => res.json())
  .then(({ data: { children } }) => {
    let articles = [];

    children.forEach((article) => {
      articles.push({
        url: article.data.url,
        title: article.data.title,
        author: article.data.author,
      });
    });

    fs.writeFile(dataPath, JSON.stringify(articles), (err) => {
      if (err) return console.error(err);

      console.log("Extracted article info.");
    });
  })
  .catch((err) => console.error(err));
