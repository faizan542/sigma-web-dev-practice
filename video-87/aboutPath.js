import path, { extname } from "path";

let myPath = "D:\\web_development_practice_from_youtube\\js-practice\\sigma-course-practice\\video-87\\faizan2.txt";
console.log(path.extname(myPath));
console.log(path.dirname(myPath));
console.log(path.basename(myPath));

console.log(path.join("d:/", "programs\\faizan.txt"))