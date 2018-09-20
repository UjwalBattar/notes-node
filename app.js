/*jshint esversion: 6 */

console.log('Starting App!');

// With ES6: (getting errors... must check)
// import { appendFile } from 'fs';
// import os from 'os';
// import _ from 'lodash';
// import { addTwoNums } from './notes.js';

// before ES6:
// const os = require('os');
const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var filteredArray = _.uniq(["Hello", "Ujwal", 1, 2, 3, 3, 4, 4, 4, "Ujwal", "Hello"]);
console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString("What up world!"));

// var twoSum = addTwoNums(9, 22);
// console.log(twoSum);

// appendFile('greetings.txt', `9 + 22 = ${twoSum} \n`, function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });

// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();
// // console.log(user);
// fs.appendFile("greetings.txt", `Hello ${user.username}! \nYou are ${notes.age}! \n`, function(err) {
//   if (err) {
//     console.log("Unable to write file");
//   }
// });

// fs.appendFile('greetings.txt', "Hello World!\n", function (err) {
//     if (err) {
//         console.log('Unable to write file');
//     }
// });
// For ES7 and up use above code or below
// With callback, use above, without callback, use below
// fs.appendFileSync('greetings.txt'. "Hello World.");

