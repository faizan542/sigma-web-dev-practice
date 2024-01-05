// const fs = require('fs'); //CommanJs module
import fs from "fs"; //Module type
// console.log(fs)

console.log("Start");
// fs.writeFileSync("faizan.txt", "Faizan is a frontend web developer");

fs.writeFile("faizan2.txt", "faizan is a web developer", () => {
    console.log('done');

    fs.readFile("faizan2.txt", (err, data) => {
        console.log(err, data);
        console.log(err, data.toString());
    })
})
fs.appendFile("faizan2.txt", " Hacker", (err, data) => {
    console.log(err, data);

});


console.log("End");