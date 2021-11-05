const any = require('lodash');

const arr1 = [1, [2, [3, [4]]]];

const newArr = any.flattenDeep(arr1);

console.log(newArr);