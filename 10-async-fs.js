const { error } = require('console');
const {readFile, writeFile} = require('fs');

console.log('Start');
readFile('./content/test2.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/test3.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-sync-2.txt', 
        `Hii the value : ${first} & ${second}`,
        (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log('Done With task');
        })
    })
})

console.log('Ending Process');