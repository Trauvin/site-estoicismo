function displayDescription() {
  const listaPensadores = document.querySelectorAll('.js-lista li');
  const descricoes = document.querySelectorAll('.js-descricao section');

  descricoes[0].classList.add('ativo');

  listaPensadores.forEach((item, index) => {
    item.addEventListener('click', function() {
      descricoes.forEach((d) => {
        d.classList.remove('ativo');
      })
      descricoes[index].classList.toggle('ativo');
    }); 
  });
}
displayDescription();

function mostraEsconde() {
  const dts = document.querySelectorAll('.js-faq dt');
  dts[0].classList.add('ativo');
  dts[0].nextElementSibling.classList.add('ativo');

  dts.forEach((dt) => {
    dt.addEventListener('click', function() {
      dt.classList.toggle('ativo');
      dt.nextElementSibling.classList.toggle('ativo');
    })
  });
}
mostraEsconde();




