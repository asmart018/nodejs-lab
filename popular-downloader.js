const path = require("path");
const fs = require("fs");
const fetch = require("isomorphic-fetch");

const downloadPath = path.join(__dirname, "downloads/");
console.log(downloadPath);

fetch("https://reddit.com/r/programmingHumor.json")
  .then((res) => res.json())
  .then(({ data: { children } }) => {
    children.forEach((article) => {
      if (
        path.extname(article.data.url) === ".jpg" ||
        path.extname(article.data.url) === ".gif" ||
        path.extname(article.data.url) === ".png"
      ) {
        fetch(article.data.url)
          .then((res) => res.arrayBuffer())
          .then((data) => {
            fs.writeFile(
              path.join(
                downloadPath,
                article.data.id + path.extname(article.data.url)
              ),
              Buffer.from(data),
              (err) => {
                if (err) return console.error(err);

                console.log("Downloaded: " + article.data.title);
              }
            );
          });
      }
    });
  })
  .catch((err) => console.error(err));
