// traversing means moving up and down the DOM tree
const wes = document.querySelector('.wes');
console.log(wes.children); // returns all the children of the element, en este caso solo el <em> tag

console.log(wes.childNodes); // returns all the children of the element including text nodes

console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);
// todas estas propiedades son para elmentos HTML, si se quiere acceder a los nodos de texto se debe usar las propiedades que terminan en Node, estos ignoran los nodos de texto

// node types, agregan los nodos de texto
console.log(wes.childNodes);
console.log(wes.firstChild);
console.log(wes.lastChild);
console.log(wes.previousSibling);
console.log(wes.nextSibling);
console.log(wes.parentNode);

// wes.remove(); // elimina el elemento del DOM

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);
p.remove();
console.log(p);
