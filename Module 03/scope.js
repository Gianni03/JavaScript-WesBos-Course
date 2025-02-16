function sayHi() {
  console.log('Hi!');
}
// todo lo que este en el scope global esta viculado al objeto global window, a excepcion de las variables declaradas con let y const
// console.log(window.sayHi); // Hi!

const age = 30;

function go() {
  const hair = 'blonde';
}

go();

console.log(age); // 30
console.log(hair); // ReferenceError: hair is not defined
// funcion scope: las variables declaradas dentro de una funcion solo estan disponibles dentro de la función

// var, let y const scope different, var es global, let y const son de bloque, function scope, block scope, var es function scope, let y const son block scope

// lexical scope: una funcion puede acceder a las variables de su padre, pero no al contrario
const dog = 'snickers';

function logDog() {
  console.log(dog);
}

function gol() {
  const dog = 'sunny';
  logDog();
}

gol(); // snickers
// en este caso la funcion logDog puede acceder a la variable dog del scope global, pero no puede acceder a la variable dog del scope de la funcion go

// function scope
function sayHey(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}

sayHey('wes'); // WES
yell(); // ReferenceError: yell is not defined, yell solo esta disponible dentro de la funcion sayHi
