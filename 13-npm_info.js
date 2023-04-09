//npm - global command, comes with node
//npm --version

//local dependency - use it in this particular  project 
// npm i <packageName>

//global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName>(mac)

// package.json - manifest file (stores important info about project/package)
// manual apporach (create package.json in the root, create properties etc)
// npm init(step by step, enter to skip)
// npm init -y (everything default)


const _ = require('lodash');
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);

//even if node modules are but into gitignore, inorder to use the code
//on my repo, we only need to type
//npm install
// this automatically downloads all dependencies required
//this happens only if we have the package json file 


//Dev Dependencies:means we might not actually use this while we deploy, but only for development, so diff name
//nodemon helps to not use node ___.js, everytime to run, it automatically updates changes made on our code

