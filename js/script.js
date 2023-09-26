import { data } from './data/data.js';
let div = document.querySelector(".cards");
let input = document.querySelector(".searcher");
let title = document.querySelectorAll(".emoji__discription");
let emoji = document.querySelector(".container");
  
function createCard({ title, symbol, keywords }) {
  let div = document.createElement("div");
  div.className = "cards";
  keywords = [...new Set(keywords.split(' '))].join(" ");
  div.innerHTML = `<h2 class = 'emoji__img' >${symbol}</h2>
        <h3 class = 'emoji__discription'>${title}</h3> 
        <p class = 'emoji__text'>${keywords}</p>`;
  return div;
}
function reapeatCards(arr) {
  arr.forEach((elem) => {
    emoji.append(createCard(elem));
  });
}
reapeatCards(data);

input.addEventListener("input", (evt) => {
  const value = evt.target.value.toLowerCase();
  let finder = data.filter((x) => x.keywords.includes(value));
  emoji.innerHTML = "";
  reapeatCards(finder)
});



