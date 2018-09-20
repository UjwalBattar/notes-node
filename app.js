/*jshint esversion: 6 */

console.log('Starting App!');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var twoSum = notes.addTwoNums(9, 22);
console.log(twoSum);

fs.appendFile('greetings.txt', `9 + 22 = ${twoSum} \n`, function (err) {
    if (err) {
        console.log('Unable to write to file');
    }
});


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

