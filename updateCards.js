
const fs = require("fs");
var unirest = require("unirest");

const jsonDir = "./json/";
 
console.log();
console.log("--------------------------------------------------------");
console.log();

console.log("Beginning Hearthstone card refresh");

unirest.get("https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json")
    .end(function (result) {
        fs.writeFileSync(jsonDir + "cards.json", JSON.stringify(result.body));
   });
