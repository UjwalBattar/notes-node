console.log('Starting App!');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// console.log(process.argv);
// argv: argument vector/array => usefiul for CLI commands & I/O
const argv = yargs.argv;
// var command = process.argv[2];
// console.log("Process: ", process.argv);
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs: ', argv);

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log(`Note created`);
		notes.logNote(note);
	} else {
		console.log(`Title: \"${argv.title}\" is taken. Use different title please.`);
	}
} else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log('All Notes:');
	console.log(`  -----`);
	allNotes.forEach((note) => {
		notes.logNote(note);
	});
	console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
} else if (command === 'read') {
	note = notes.getNote(argv.title);
	if (note) {
		console.log(`Note:`);
		notes.logNote(note);
	} else {
		console.log(`Note with Title: \"${argv.title}\" does not exist.`);
	}
} else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? `Note with title \"${argv.title}\" has been removed.` : 'Note not found';
	console.log(message);
} else {
	console.log('Command not recognized.');
}

// NOTES and REVIEW:

// With ES6: (getting errors... must check)
// import { appendFile } from 'fs';
// import os from 'os';
// import _ from 'lodash';
// import { addTwoNums } from './notes.js';

// before ES6:
// const os = require('os');
// const fs = require("fs");
// const _ = require("lodash");

// const notes = require("./notes.js");

// var filteredArray = _.uniq(["Hello", "Ujwal", 1, 2, 3, 3, 4, 4, 4, "Ujwal", "Hello"]);
// console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString("What up world!"));

// var twoSum = notes.addTwoNums(9, 22);
// console.log(twoSum);

// appendFile('./playground/greetings.txt', `9 + 22 = ${twoSum} \n`, function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });

// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();
// // console.log(user);
// fs.appendFile("./playground/greetings.txt", `Hello ${user.username}! \nYou are ${notes.age}! \n`, function(err) {
//   if (err) {
//     console.log("Unable to write file");
//   }
// });

// fs.appendFile('./playground/greetings.txt', "Hello World!\n", function (err) {
//     if (err) {
//         console.log('Unable to write file');
//     }
// });
// For ES7 and up use above code or below
// With callback, use above, without callback, use below
// fs.appendFileSync('./playground/greetings.txt'. "Hello World.");