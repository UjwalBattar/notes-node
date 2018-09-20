console.log('Starting notes.js');   

var addNote = (title, body) => {
    console.log("Adding note:", title, body);
    
};

var getAll = () => {
    console.log('Getting all notes...');
    
};

var getNote = (title) => {
    console.log('Here is the note you requested: ', title);
    
};

var removeNote = (title) => {
    console.log('Removing the note with the title: ', title);
    
};

module.exports = {
    // addNote: addNote => same thing below, if attribute and value are same
    // below is used in ES6
    addNote,
    getAll,
    getNote,
    removeNote
};






















// NOTES and REVIEW:

// module.exports.addTwoNums = (a, b) => {
//     console.log(`adding ${a} and ${b}....`);
//     return a + b;
// }

// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'New Note';
// }

// module.exports.age = 25;

// console.log(module);