// classes
const pic = document.querySelector('.nice');
console.log(pic.classList); // devuelve un DOMTokenList que es un array-like object que contiene las clases del elemento.
pic.classList.add('open'); // añade la clase open al elemento.
console.log(pic.classList);
pic.classList.remove('cool'); // remueve la clase cool del elemento.
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);

pic.alt = 'Cute Pup'; // añade un atributo alt al elemento. setter
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // devuelve el ancho del elemento. funciona solo cuando la imagen ya ha sido cargada. funciona solo como getter.

pic.addEventListener('load', () => {
  console.log(pic.naturalWidth);
});

pic.width = 500; // cambia el ancho del elemento.
console.log(pic.width);

pic.setAttribute('alt', 'Really Cute Pup'); // cambia el valor del atributo alt.
console.log(pic.getAttribute('alt')); // devuelve el valor del atributo alt.data attributes, son atributos personalizados que se pueden añadir a los elementos. se escriben data- y el nombre del atributo. se pueden acceder a estos atributos con el método dataset. y se usan para almacenar información adicional en los elementos.
const custom = document.querySelector('.custom');
console.log(custom.dataset);
custom.addEventListener('click', () => {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
custom.addEventListener('click', () => {
  custom.style.setProperty('background-color', 'pink');
});
