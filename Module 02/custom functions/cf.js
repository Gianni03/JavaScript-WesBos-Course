function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // function body
  console.log(billAmount, taxRate);
  console.log('Running Calculate Bill!!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

const myTotal = calculateBill(100, 1.13); // function call
const myTotal2 = calculateBill(200, 1.13); // function call

console.log(myTotal, myTotal2);

// a tener en cuenta
const gianniBill = 500;
const gianniTax = 0.07;
const gianniTotal = calculateBill(gianniBill, gianniTax);
console.log(gianniBill, gianniTax, gianniTotal);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo('Gianni');
console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'default name') {
  return `HEY ${name.toUpperCase()}`;
}

yell('Gianni');
doctorize('Gianni');
yell(doctorize('Gianni'));

const myBill4 = calculateBill(100, undefined, 0.2); // el fallback solo funciona con undefined
console.log(myBill4);
