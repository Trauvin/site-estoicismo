export default function scrollToPerson() {
  const persons = document.querySelectorAll('.dropdown-menu a');

  persons.forEach((person) => {
    person.addEventListener('click', scrollTo);
  });

  function scrollTo(event) {
    const sections = document.querySelectorAll('.js-descricao section');
    const href = this.getAttribute('href');

    sections.forEach((section) => {
      const pensadoresLista = document.querySelector('.pensadores-lista');
      section.classList.remove('ativo');

      // verifica se o href e o id correspondem a uma seção
      if (href === "#" + section.getAttribute('id')) {
        section.classList.toggle('ativo');

        // seleciona a imagem correspodente e sua posição Y no scroll interno
        const imageCorrespondente = document.querySelector('.' + section.getAttribute('id') + '-img' + ' img').y - 40;

        pensadoresLista.scroll({
          top: imageCorrespondente,
          behavior: 'smooth'
        });

        window.scroll({
          top: pensadoresLista.offsetTop - 150,
          behavior: 'smooth'
        });
      }
    });
  }
}
