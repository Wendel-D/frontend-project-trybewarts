const getBtn = document.getElementById('bt-enviar');
const getInputEmail = document.getElementById('email');
const getInputSenha = document.getElementById('senha');

function clickbtn() {
  getBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (getInputEmail.value === 'tryber@teste.com' && getInputSenha.value === '123456') {
      alert('Olá, Tryber!');
    }alert('Email ou senha inválidos.');
  });
}
clickbtn();
