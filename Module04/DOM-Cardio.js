// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const li1 = document.createElement('li');
li1.textContent = 'one';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.textContent = 'two';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.textContent = 'three';
ul.appendChild(li3);

// put that list into the above wrapper
div.appendChild(ul);

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://picsum.photos/200';
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;
// put this div before the unordered list from above
ul.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
myDiv.childNodes[3].classList.add('warning');
// remove the first paragraph
myDiv.childNodes[1].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  return `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>Their heigth is ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
      <button class="delete" type="button">&times; Delete</button>
    </div>
  `;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const card = document.createElement('div');
card.classList.add('cards');

// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('wes', 12, 150);
cardsHTML += generatePlayerCard('scott', 100, 250);
cardsHTML += generatePlayerCard('kait', 25, 140);
cardsHTML += generatePlayerCard('snickers', 5, 20);

// append those cards to the div
card.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', card);s
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const buttons = document.querySelectorAll('.delete');
function deleteCard(e) {
  const buttonThatWasClicked = e.currentTarget;
  buttonThatWasClicked.closest('.playerCard').remove();
}
buttons.forEach(button => button.addEventListener('click', deleteCard));

// select all the buttons!

// make out delete function

// loop over them and attach a listener
