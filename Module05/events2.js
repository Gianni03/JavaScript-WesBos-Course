const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');

function handleClick() {
  console.log('clicked');
}
butts.addEventListener('click', handleClick);
cool.addEventListener('click', handleClick);
butts.removeEventListener('click', handleClick);

// listen to multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log('You clicked a buy button!');
  // console.log(event);
  console.log(event.currentTarget);
  // console.log(event.target.childNodes[0].textContent);
  // console.log(event.target.dataset.price);
  // event.target es el elemento que disparó el evento, event.currentTarget es el elemento al que le pusimos el listener
  // stop the event from bubbling up
  event.stopPropagation();
}
buyButtons.forEach((button) => {
  button.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  (event) => {
    console.log('You clicked the window');
    console.log(event.target);
  },
  { capture: true },
);
// esto es propagación de eventos, el evento se propaga desde el elemento que lo disparó hasta el elemento padre, y luego hasta el elemento padre de ese elemento, y así sucesivamente. Si no queremos que esto pase, podemos usar event.stopPropagation() para detener la propagación del evento.

// capture es lo contrario a bubbling, el evento se propaga desde el elemento padre hasta el elemento que lo disparó. Esto se puede usar para evitar que el evento se propague hasta el elemento padre, pero no es muy común usarlo. En este caso, estamos usando capture para que el evento se dispare en el elemento padre antes de que se dispare en el elemento hijo. Esto es útil si queremos evitar que el evento se dispare en el elemento hijo, pero no es muy común usarlo.

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', (event) => {
  console.log(event.currentTarget);
  console.log(this); // this es el elemento que disparó el evento, pero no funciona en este caso porque estamos usando una función de flecha, y las funciones de flecha no tienen su propio this. En este caso, this es el objeto global (window en el navegador).
});
