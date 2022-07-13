const getBtn = document.getElementById('bt-enviar');

function clickbtn() {
  getBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('oi');
  });
}
clickbtn();