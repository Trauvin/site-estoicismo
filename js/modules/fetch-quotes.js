export default function initQuote() {

  fetch('https://stoicquotesapi.com/v1/api/quotes/random')
  .then(res => res.json())
  .then(quote => {
    const estoicQuote = document.querySelector('.quote');
    const author = document.querySelector('.author');
    estoicQuote.innerText = `"${quote.body}"`;
    author.innerText = quote.author;
    console.log(quote)
  });
}