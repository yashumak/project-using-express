import fs from "fs/promises";
import path from "path";
import fsn from "fs";

const basepath = "C:\\Users\\USER\\OneDrive\\Desktop\\practice OP\\Arrange File";

let files = await fs.readdir(basepath);

for (const item of files) {
    console.log("running for", item);
    let ext = item.split(".")[item.split(".").length - 1];
    if (ext !== "js" && ext !== "json" && item.split(".").length > 1) {
        if (fsn.existsSync(path.join(basepath, ext))) {
            await fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
        } else {
            await fs.mkdir(path.join(basepath, ext));
            await fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
        }
    }
}