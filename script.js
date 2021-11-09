document.querySelector('.header button').addEventListener('click', () => {
  const inputEmail = document.querySelector('.trybewarts-login input[type=email]').value;
  const inputSenha = document.querySelector('.trybewarts-login input[type=password]').value;
  if (inputEmail === 'tryber@teste.com' && inputSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const checkBox = document.querySelector('#agreement');
const btn = document.querySelector('#submit-btn');
checkBox.addEventListener('change', () => {
  if (checkBox.checked) {
    btn.removeAttribute('disabled');
    return;
  }
  btn.setAttribute('disabled', '');
});
