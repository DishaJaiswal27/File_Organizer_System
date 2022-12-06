#!/usr/bin/env node

let help = require(".\\commands\\help.js");
let organize = require(".\\commands\\organize.js");
let tree = require(".\\commands\\tree.js");

let inputCommand = process.argv.slice(2);

let cmd = inputCommand[0];
switch(cmd){
    case "tree":
        tree.treeKey(inputCommand[1]);
        break;
    case "organize":
        organize.organizeKey(inputCommand[1]);
        break;
    case "help":
        help.helpKey();
        break;
    default:
        console.log("⚠️\t\b\b\bPlease enter valid command!!");
        break;
}



