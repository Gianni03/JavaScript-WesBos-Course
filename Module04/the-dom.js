function init() {
  const p = document.querySelector('p');
  console.log(p);
}

document.addEventListener('DOMContentLoaded', init);
// esto es lo mismo que hacer window.onload = init; lo que pasa es que el addEventListener es más moderno y se puede agregar más de un evento a un elemento. eso lo que hace es que cuando se carga el DOM se ejecuta la función init por lo que no es necesario poner el script al final del body ni poner el defer en el script del head.

// seleccionar elementos
// querySelector y querySelectorAll, estos métodos permiten seleccionar elementos del DOM de la misma forma que lo hacemos con CSS. y generan un nodeList que es un array-like object, pero no es un array, por lo que no tiene los métodos de los arrays, pero se puede convertir a un array con Array.from() o con el spread operator.

// getElementById y getElementsByClassName, estos métodos son más antiguos y no son tan flexibles como los querySelector, pero siguen siendo útiles. getElementById devuelve un solo elemento y getElementsByClassName devuelve un HTMLCollection que es un array-like object.

const divs = document.querySelectorAll('div');
console.log(divs);

const heading = document.querySelector('h2');
console.log(heading.innerText);
console.log(heading.textContent);
// innerText devuelve el texto visible en el elemento, esto incluye si hay alguna etiqueta stylr y textContent devuelve todo el texto incluyendo los espacios en blanco.

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);
// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
pizzaList.insertAdjacentText('afterbegin', '🍕');
// insertAdjacentText es un método que permite insertar texto en un elemento antes o después de otro elemento. las opciones son beforebegin, afterbegin, beforeend y afterend.
