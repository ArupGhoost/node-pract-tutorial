const {readFileSync, writeFileSync} = require('fs');

console.log('Start');
const second = readFileSync('./content/test2.txt', 'utf-8');

const third = readFileSync('./content/test3.txt',  'utf-8');

console.log(second, third);

writeFileSync('./content/result-sync.txt', 
`Here is the result : ${second} & ${third}`, {flag : 'a'})
console.log('Done with it');
console.log('Next')