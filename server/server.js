const path = require("path");
const fs = require("fs");

const dataPath = path.join(__dirname, "../chirps.json");

let chirps = [
  { author: "Shoresy", body: "You skate like a newborn giraffe!" },
  {
    author: "Jonesy",
    body: "You have bricks for hands, did you get them specially made by a construction worker?",
  },
  {
    author: "Shoresy",
    body: "Oh, please. I can dangle you with my eyes closed.",
  },
  { author: "Jonesy", body: "Yeah, do that, I'll check you into next week." },
  {
    author: "Shoresy",
    body: "Hit me?? You can't even hit the goalie in the chest. ",
  },
];

fs.writeFile(dataPath, JSON.stringify(chirps), (err) => {
  if (err) console.log(err);
});

fs.readFile(dataPath, () => {
  chirps.forEach((post) => {
    console.log(`${post.body} \n -${post.author} \n`);
  });
});
