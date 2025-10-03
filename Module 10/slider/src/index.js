function Slider(slider) {
  
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in')
  }

  let current;
  let prev;
  let next;

  const slides = slider.querySelector('.slides')

}

const mySlider = Slider(document.querySelector('.slider'))
const dogSlider = Slider(document.querySelector('.dog-slider'))