export default function outsideCLick() {
  const html = document.documentElement;
  const menu = document.querySelector('[data-menu="list"]');


  function closeMenu(event) {
    if (event.target !== menu) {
      menu.classList.add('inativo')
    }
  }

  html.addEventListener('click', closeMenu)
}