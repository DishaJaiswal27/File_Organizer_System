let utility = require("..\\utility.js")
let fs = require("fs");
let path = require("path");

function organizefn(dirpath){
    //1. check dirpath is valid or invalid
    //2. if valid create organize named directory in dirpath
        //2.1 check each file and move to its right corresponding folder
    //3. if invalid create organize named directory in current path
        //3.1 check each file and move to its right corresponding folder 
    
    let dest;
    if(dirpath==undefined || !fs.existsSync(dirpath)){
        dirpath = process.cwd();
        dest = path.join(dirpath,"organized_files");
            if(!fs.existsSync(dest)){
                fs.mkdirSync(dest);
            }
            organizeFileFn(dirpath,dest);

    }
    else if(fs.existsSync(dirpath)){
        if(fs.lstatSync(dirpath).isDirectory()){
            dest = path.join(dirpath,"organized_files");
            if(!fs.existsSync(dest)){
                fs.mkdirSync(dest);
            }
            organizeFileFn(dirpath,dest);
        }
        else{
            console.log("⚠️\t\b\b\bPlease enter path of directory!!");
            return;
        }
    }
    else{
        dest = path.join(__dirname,"organized_files");
        if(!fs.existsSync(dest)){
            fs.mkdirSync(dest);
        }
        organizeFileFn(dirpath,dest);
    }



}

function organizeFileFn(src,dest){
    let files = fs.readdirSync(src);
    for(let i = 0;i < files.length;i++){
        let childPath = path.join(src,files[i]);
        if(fs.lstatSync(childPath).isFile()){
            let ext = path.extname(files[i]);
            ext = ext.slice(1);
            let category = getCategory(ext);
            moveFile(childPath,dest,category);
        }
        
    }
    
}

function moveFile(childPath,dest,category){
    let destPath = path.join(dest,category);
    if(!fs.existsSync(destPath)){
        fs.mkdirSync(destPath);
    }
    let filename = path.basename(childPath);
    let finalpath = path.join(destPath,filename);
    fs.copyFileSync(childPath,finalpath);
    // fs.unlinkSync(childPath);
}

function getCategory(ext){
    for(let i in utility.types){
        let cat = utility.types[i];
        for(let j in cat){
            if(cat[j] == ext){
                return i;
            }
        }
    }
    return "other";
}


module.exports = {
    organizeKey : organizefn
}