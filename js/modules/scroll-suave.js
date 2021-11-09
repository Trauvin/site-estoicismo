export default function scrollSuave() {
  const menuItens = document.querySelectorAll('[data-menu] a[href^="#"]');

  menuItens.forEach((item) => {
    item.addEventListener('click', scrollToId)
  });

  function scrollToId(event) {
    event.preventDefault();
    const elementId = event.target.getAttribute('href');
    const to = document.querySelector(elementId).offsetTop - 20;

    scrollToPosition(to);
    
  }

  function scrollToPosition(to) {
    window.scroll({
      top: to,
      behavior: 'smooth',
    });
  }
}