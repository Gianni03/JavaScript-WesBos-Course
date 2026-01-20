const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

let items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value // desde el form tenemos acceso mediante . al name del input, no hace falta otro querySelector
  if (!name) return; // si no hay nombre, no hacer nada
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  items.push(item);
  e.target.reset(); // resetea el formulario

  // custom event, para avisar que se ha añadido un nuevo item
  list.dispatchEvent(new CustomEvent('itemsUpdated'));


}

function displayItems() {
  console.log(items);
  const html = items
  .map(
    item => 
     `<li class="shopping-item">
      <input 
      value="${item.id}"
      type="checkbox"  
      ${item.complete ? 'checked' : ''}> 
    <span>${item.name}</span>
    <button aria-label="Remove ${item.name}" value="${item.id}">&times;</button>
    </li>`
  ).join('');
  list.innerHTML = html;
}

function mirrowToLocalStorage() {
  console.info('mirrow to LS');
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info('restoring from LS');
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  items = items.filter(item => item.id !== id);

  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  const itemRef = items.find(item => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrowToLocalStorage);
// event delegation, para escuchar clicks en los botones de borrar
list.addEventListener('click', function (e) {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});

restoreFromLocalStorage();


