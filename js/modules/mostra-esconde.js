export default function mostraEsconde() {
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