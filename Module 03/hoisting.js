sayHi();

function sayHi() {
  console.log('Hello!');
}

// hoisting is the process of moving function declarations to the top of the file.
// en realidad, el código anterior se ejecuta de la siguiente manera: el motor de javascript hace dos pasadas por el código, en la primera pasada, se mueven las declaraciones de funciones al principio del archivo, y en la segunda pasada, se ejecuta el código. Por eso, aunque la función se declara después de la llamada a la función, el código se ejecuta sin problemas.
