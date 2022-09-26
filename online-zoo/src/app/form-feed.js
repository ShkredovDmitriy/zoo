const form = document.querySelector('.form-feed');
const input = document.querySelector('.form-feed__input');
const feedOnce = document.getElementById('feedOnce');
const feedSumma1000 = document.getElementById('feedSumma1000');

form.reset()
feedOnce.checked = true;
feedSumma1000.checked = true;

input.addEventListener('focus', (event) => {
  console.log(event.target.value)
  if(event.target.value.length < 1) {
    input.classList.add('error')
  }
})

input.addEventListener('input', (event) => {
  if(event.target.value < 1) {
    input.value = null;
  }
  if(event.target.value > 9999) {
    input.value = event.target.value.slice(0, 4);
  }
  if(event.target.value < 1) {
    input.classList.add('error')
  } else {
    input.classList.remove('error')
  }
})


form.addEventListener('submit', (event) => {
  event.preventDefault();
})
