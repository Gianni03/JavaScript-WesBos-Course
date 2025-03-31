const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a paragraph';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// document.body.appendChild(myDiv);
// myDiv.appendChild(myParagraph);
// myDiv.appendChild(myImage);
// esto gener un reflow en el DOM, es decir, una reorganización de los elementos en el DOM, lo cual es costoso en términos de rendimiento porque el navegador tiene que volver a calcular la posición de los elementos en la página.

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv); // de esta forma solo se produce un reflow en el DOM, lo cual es mucho más eficiente en términos de rendimiento. lo que se hize es que se agregaron los elementos al div y luego se agregó el div al body.
// la diferencia entre appendChild y append es que appendChild solo acepta un elemento como argumento, mientras que append puede aceptar varios elementos como argumento.

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';
myDiv.insertAdjacentElement('beforebegin', heading); // beforebegin, afterbegin, beforeend, afterend

const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'Three';
list.appendChild(li);
document.body.insertAdjacentElement('afterbegin', list);

const li5 = document.createElement('li');
li5.textContent = 'Five';
list.append(li5);
const li1 = li5.cloneNode(true);
li1.textContent = 'One';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'Four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'Two';
li1.insertAdjacentElement('afterend', li2);
