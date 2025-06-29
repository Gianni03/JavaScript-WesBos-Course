const item = document.querySelector('.item');

const width = 400;
const src = `https://picsum.photos/${width}`;
const desc = `Cute pup`;
const myHTML = `
  <div class="wrapper">
  <h2>Hey how are you?</h2>
  <img src="${src}" alt="${desc}"/>
  </div>
`;
// item.innerHTML = myHTML;
// console.log(item.innerHTML);
// a tener en cuenta que el innerHTML es un string, por lo que no se puede acceder a los elementos del DOM, no se puede hacer un querySelector, agregar clases, etc.

// const itemImg = document.querySelector('.wrapper img');
// itemImg.classList.add('round');

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);
console.log(myFragment.querySelector('img'));
document.body.appendChild(myFragment);

// xxs es un ataque de inyección de código, por lo que no se debe usar innerHTML para insertar contenido en el DOM, se debe usar createRange().createContextualFragment() para evitar este tipo de ataques.
