import fs from "fs/promises";

let a = await fs.readFile("faizan2.txt")
// console.log(a)

let b = await fs.appendFile("faizan2.txt","\n\n\nThis is amazing")
console.log(b);

