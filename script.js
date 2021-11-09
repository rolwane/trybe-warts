const checkBox = document.querySelector('#agreement');
const btn = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const conteudos = document.querySelectorAll('#evaluation-form input[name=conteudo]');

// onde vou por os valores dos inputs
const pNome = document.querySelector('#p-nome');
const pEmail = document.querySelector('#p-email');
const pFamilia = document.querySelector('#p-familia');
const pConteudo = document.querySelector('#p-conteudo');
const pCasa = document.querySelector('#p-casa');
const pNota = document.querySelector('#p-nota');
const pFeedback = document.querySelector('#p-feedback');

document.querySelector('.header button').addEventListener('click', () => {
  const inputEmail = document.querySelector('.trybewarts-login input[type=email]').value;
  const inputSenha = document.querySelector('.trybewarts-login input[type=password]').value;
  if (inputEmail === 'tryber@teste.com' && inputSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkBox.addEventListener('change', () => {
  if (checkBox.checked) {
    btn.removeAttribute('disabled');
    return;
  }
  btn.setAttribute('disabled', '');
});

textArea.addEventListener('keyup', () => {
  const span = document.querySelector('#counter');
  span.innerHTML = 500 - textArea.value.length;
});

function generateMaterias() {
  let content = '';
  for (let i = 0; i < conteudos.length; i += 1) {
    if (conteudos[i].checked) {
      content += `${conteudos[i].value}, `;
    }
  }
  const arrContent = content.split('');
  arrContent.pop();
  arrContent.pop();
  return arrContent.join('');
}

btn.addEventListener('click', (e) => {
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  const feedback = document.querySelector('#textarea').value;
  const familia = document.querySelector('#evaluation-form input[name=family]:checked').value;
  const rate = document.querySelector('#evaluation-form input[name=rate]:checked').value;
  e.preventDefault();
  pNome.innerHTML = `Nome: ${nome} ${sobrenome}`;
  pEmail.innerHTML = `Email: ${email}`;
  pCasa.innerHTML = `Casa: ${casa}`;
  pFamilia.innerHTML = `Família: ${familia}`;
  pConteudo.innerHTML = `Matérias: ${generateMaterias()}`;
  pNota.innerHTML = `Avaliação: ${rate}`;
  pFeedback.innerHTML = `Observações: ${feedback}`;
  document.querySelector('#infos').style.display = 'block';
  document.querySelector('#container-form').style.display = 'none';
});
