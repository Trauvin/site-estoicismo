export default function dropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown');

  dropdownMenus.forEach((menu) => {
    const events = ['click', 'touchstart'];
  
    events.forEach((e) => {
      menu.addEventListener(e, handleClick);
    });
  });
  
  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle('active');
  }
}

