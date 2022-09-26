const form = document.querySelector('.form-subscribe');
const input = document.querySelector('.form-subscribe__input');
const submit = document.querySelector('.form-subscribe__submit');
const popup = document.querySelector('.form-subscribe__popup');
let isCorrectEmail = false;

input.addEventListener('focus', (event) => {
  console.log(event.target.value)
  const email = event.target.value.trim();
  emailCheck(email);
})

input.addEventListener('input', (event) => {
  console.log(event.target.value)
  const email = event.target.value.trim();
  emailCheck(email);
})

submit.addEventListener('click', (event) => {
  if(isCorrectEmail) {
    input.value = '';
    popup.classList.add('active');
    setTimeout(() => popup.classList.remove('active'), 3000)
    isCorrectEmail = false;
  } else {
    emailCheck('');
  }
})

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if(isCorrectEmail) {
    input.value = '';
    popup.classList.add('active');
    setTimeout(() => popup.classList.remove('active'), 3000)
    isCorrectEmail = false;
  } else {
    emailCheck('');
  }
})

// HELPERS
function emailCheck(value) {
  if(emailTest(value)) {
    input.classList.remove('error')
    submit.classList.remove('error')
    isCorrectEmail = true;
  } else {
    input.classList.add('error')
    submit.classList.add('error')
    isCorrectEmail = false;
  }
}

function emailTest(value) {
  return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/i.test(value);
};