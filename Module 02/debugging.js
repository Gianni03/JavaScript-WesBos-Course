const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.group(`${person.name}`);
  console.log(person.country);
  console.log(person.cool);
  console.log('DONE!');
  console.groupEnd(`${person.name}`);
});

// Console Methods
console.table(people);
console.error('This is an error');
console.count('Wes');

function doALotOfStuff() {
  console.group('Doing some stuff');
  console.log('Hey I am a group');
  console.warn('Hey I am a warning');
  console.error('Hey I am an error');
  console.groupEnd('Doing some stuff');
}

// Callstack

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function (e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
