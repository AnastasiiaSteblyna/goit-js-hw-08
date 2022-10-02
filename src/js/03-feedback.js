import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[type="email"]');
const messageInput = document.querySelector('[name="message"]');

form.addEventListener('input', throttle(onFormInput, 500));
function onFormInput() {
  let client = { Email: emailInput.value, Message: messageInput.value };
  localStorage.setItem(`feedback-form-state`, JSON.stringify(client));
}

let savedClient = JSON.parse(localStorage.getItem(`feedback-form-state`));
if (savedClient !== null) {
  emailInput.value = savedClient.Email;
  messageInput.value = savedClient.Message;
}

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  if (emailInput.value === '' || messageInput.value === '') {
    alert('Не всі поля заповненні, перевірте данні.');
  }

  const formData = {
    Email: emailInput.value,
    Message: messageInput.value,
  };

  console.log(formData);

  form.reset();
}
