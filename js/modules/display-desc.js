export default function displayDescription() {
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
