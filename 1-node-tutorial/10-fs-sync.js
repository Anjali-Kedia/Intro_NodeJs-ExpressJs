const {readFileSync, writeFileSync} = require('fs');
// const fs = require('fs');
// fs.readFileSync();
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second  = readFileSync('./content/second.txt','utf8');

console.log(first,second)

//adding flag a causes appending the value we are adding to the already existing value in the file
writeFileSync('./content/result-sync.txt',`Here is the result: ${first},${second}`,{flag: 'a'})

console.log('done with the task');
console.log('starting  with the next task');
