

function helpfn(){
    console.log(`
            List of valid commands :
                1. node main.js tree "<dir-path>"
                2. node main.js organize "<dir-path>"
                3. node main.js help
    `)
}

module.exports={
    helpKey : helpfn
}