console.log("It's Works");

// funcion keyword
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// anonymous function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// function expression
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

/* eslint-disable */
// arrow function
const inchToCM = inches => inches * 2.54;

const add = (a, b = 3) => a + b;


// returning an object
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 }); // return an object with ()


// IIFE, Immediately Invoked Function Expression
(function() {
  console.log('Running the Anon function');
  return 'You are cool';
})(); // () to run the function, parenthesis around the function to make it an expression, and in javascript, anything inside parenthesis is an expression and can be run immediately

// Methods!!!, a function that lives inside of an object
const wes = {
  name: 'Wes Bos',
  // Method!
  sayHi: function() {
    console.log(`Hey ${this.name}`);
    return 'Hey Wes'; 
  },
  // Short hand Method
  yellHi() {
    console.log('HEY WESSSSS');
  },
  // Arrow function
  wisperHi: () => {
    console.log('hii wesss im a mouse');
  }
};

// Callback Functions
// Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking!!');
}
// button.addEventListener('click', wes.yellHi);
// button.addEventListener('click', handleClick);
button.addEventListener('click', function() {
  console.log('Nice Job!!!');
});

// Timer Callback
setTimeout(wes.yellHi, 1000);

setTimeout(function() { // tambien se puede hacer con arrow function
  console.log('DONE! Time to eat!');
}, 1500);