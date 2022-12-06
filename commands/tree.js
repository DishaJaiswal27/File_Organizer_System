let fs = require("fs");
let path = require("path");

function treefn(dirpath){
    if(fs.existsSync(dirpath)){
        treehelper(dirpath,"");
    }
    else{
        treehelper(process.cwd(),"");
        return;
    }
}

function treehelper(dirPath,indent){
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile){
        let filename = path.basename(dirPath);
        console.log(indent + "|----" + filename);
    }
    else{
        let dirname = path.basename(dirPath);
        console.log(indent + "-----" + dirname);
        let child = fs.readdirSync(dirPath);
        for(let i = 0;i < child.length;i++){
            let childPath = path.join(dirPath,child[i]);
            treehelper(childPath,indent+"\t");
        }
    }
}

module.exports = {
    treeKey : treefn
}