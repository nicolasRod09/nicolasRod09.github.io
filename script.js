const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;
const agreement = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

const verification = () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
};

loginBtn.addEventListener('click', verification);

textarea.addEventListener('input', () => {
  const counterValue = 500 - textarea.value.length;
  counter.innerText = counterValue;
});

agreement.addEventListener('click', () => {
  if (agreement.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
