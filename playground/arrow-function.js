// In general, if you do not need this, use arrow functions
// else, use non-arrow functions.

// var square = (x) => {
//     var result = Math.pow(x, 2);
//     return result;
// };

var square = (x) => Math.pow(x, 2);

console.log(square(9));

var user = {
    name: 'Ujwal',
    sayHi: () => {

        console.log(arguments);
        // arguments here refers to the global arguments
        console.log(`Hi! I'm ${this.name}`);
        console.log('-- This has been an arrow function example.');

        // this referst to a global(?) this not user
    },
    sayHiAlt() {
        console.log(arguments);
        // es6 syntax, save vars to non arrow functions to bind this and arguments
        console.log(`Hi! I'm ${this.name}`);
        console.log('-- This has been a non-arrow function example.');

    }
};

user.sayHi(4, 4, 4);
user.sayHiAlt(1, 1, 1);