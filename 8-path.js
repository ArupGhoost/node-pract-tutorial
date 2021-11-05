const path = require('path');

console.log(path.sep);

const filepath = path.join('/content/', 'subfolder', 'maintext.txt');

console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const absolute = path.resolve(__dirname, '/content/', 'subfolder', 'maintext.txt');
console.log(absolute);