const getBtn = document.getElementById('bt-enviar');
const getInputEmail = document.getElementById('email');
const getInputSenha = document.getElementById('senha');
const getInputAgreement = document.getElementById('agreement');
const getBtnSubmit = document.getElementById('submit-btn');

function clickbtn() {
  getBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (getInputEmail.value === 'tryber@teste.com' && getInputSenha.value === '123456') {
      alert('Olá, Tryber!');
    }alert('Email ou senha inválidos.');
  });
}
clickbtn();

function enableBtn() {
  getInputAgreement.addEventListener('click', () => {
    if (getBtnSubmit.disabled) {
      getBtnSubmit.disabled = false;
    } else {
      getBtnSubmit.disabled = true;
    }
  });
}
enableBtn();

function contador() {
  const texto = document.getElementById('textarea');
  const carac = document.getElementById('counter');
  const decrescente = 500;
  function subCont() {
    const textV = texto.value;
    carac.innerText = decrescente - textV.length;
  }
  texto.addEventListener('keydown', subCont);
}
contador();
