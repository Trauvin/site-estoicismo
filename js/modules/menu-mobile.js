export default function menuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function ativaMenu() {
    menuButton.classList.toggle('ativo');
    menuList.classList.toggle('ativo')
  }

  menuButton.addEventListener('click', ativaMenu);
}