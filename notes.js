console.log('Starting notes.js');

const fs = require('fs');
var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (err) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (!duplicateNotes.length) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    // debugger;
    console.log('--');
    console.log(`Title: `, note.title);
    console.log((`Body: `, note.body));
};

module.exports = {
    // addNote: addNote => same thing below, 
    //                      if attribute and value are same
    // below is used in ES6
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
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