const wes = document.querySelector('.wes');

wes.addEventListener('click', function (event) {
  const shouldChangePage = confirm(
    'This website might be dangerous. Do you want to continue?'
  );
  if (!shouldChangePage) {
    event.preventDefault();
  }
});

const sigupForm = document.querySelector('[name="signup"]');

sigupForm.addEventListener('submit', function (event) {
  const name = event.currentTarget.name.value;
  if(name.includes('chad')) {
    alert('Sorry, that name is not allowed');
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

sigupForm.addEventListener('keyup', logEvent);
sigupForm.addEventListener('keydown', logEvent);
sigupForm.addEventListener('focus', logEvent);
sigupForm.addEventListener('blur', logEvent);

const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log("you clicked the photo");
  }
}

photo.addEventListener('click', function (event) {
  console.log("you clicked the photo");
})

photo.addEventListener('keyup', handlePhotoClick);