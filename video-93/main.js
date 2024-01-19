import fs from "fs/promises";
import fsn from "fs";
import path from "path";


let basePath = "D:\\web_development_practice_from_youtube\\js-practice\\sigma-course-practice\\video-93";
let files = await fs.readdir(basePath);


for (const item of files) {
    console.log("running for " + item)
    let ext = item.split('.')[item.split('.').length - 1];
    if (ext != "js" && ext != "json" && item.split('.').length > 1) {

        if (fsn.existsSync(path.join(basePath, ext))) {
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item));
        } else {
            fs.mkdir(ext);
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item));
        }
    }
}