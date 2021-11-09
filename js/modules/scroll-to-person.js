export default function scrollToPerson() {
  const persons = document.querySelectorAll('.dropdown-menu a');

  persons.forEach((person) => {
    person.addEventListener('click', scrollTo);
  });

  function scrollTo(event) {
    const sections = document.querySelectorAll('.js-descricao section');
    const href = this.getAttribute('href');
    const to = document.querySelector(href).offsetTop;

    sections.forEach((section) => {
      section.classList.remove('ativo');
      if (href === "#" + section.getAttribute('id')) {
        section.classList.toggle('ativo');
        console.log(section);
      }
    });

    window.scroll({
      top: to,
      behavior: 'smooth'
    });
  }
}
// function findElement(elementId) {

//   const listaPensadores = document.querySelectorAll('.js-lista li');
//   const descricoes = document.querySelectorAll('.js-descricao section');

//   descricoes[0].classList.add('ativo');

//   listaPensadores.forEach((item, index) => {
//     if (elementId == item.getAttribute(id)) {
//       item.addEventListener('click', function() {
//         descricoes.forEach((d) => {
//           d.classList.remove('ativo');
//         })
//         descricoes[index].classList.toggle('ativo');
//       });
//     }
//   });
// }