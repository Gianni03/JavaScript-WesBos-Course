const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');
// butts.addEventListener('click', (e) => {
// console.log("clicked");
// });

// también podemos pasar una funion como referencia

function handleClick() {
  console.log('clicked');
}
butts.addEventListener('click', handleClick); // no lleva los paréntesis, porque si no se ejecutaría inmediatamente
cool.addEventListener('click', handleClick); // al hacer la funcion por fuera del lisener, la podemos reutilizar

butts.removeEventListener('click', handleClick); // para eliminar el evento, se tiene que pasar la misma referencia de la función, si fuera una función anónima no se podría eliminar

// listen to multiple items
const buyButtons = document.querySelectorAll('button.buy');
console.log(buyButtons);

function handleBuyClick(buyButton) {
  buyButton.addEventListener('click', () => {
    console.log(buyButton.innerText);
  });
}

buyButtons.forEach(handleBuyClick);
