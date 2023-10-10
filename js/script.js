// import { data } from './data/data.js';

let div = document.querySelector(".cards");
let input = document.querySelector(".searcher");
let title = document.querySelectorAll(".emoji__discription");
let emoji = document.querySelector(".container");

input.addEventListener("input", (evt) => {
  let value = evt.target.value.toLowerCase();
  getFiltredData(value);
// controller.abort();
});

let controller = new AbortController();

async function getFiltredData(value) {
  let data2 = await fetch(`http://localhost:7100/api/get?filter=${value}`, {signal: controller.signal})
    .then((res) => res.json())
    .then((dat) => dat);
  emoji.innerHTML = "";
  reapeatCards(data2);
}

function createCard({ title, symbol, keywords }) {
  let div = document.createElement("div");
  div.className = "cards";
  keywords = [...new Set(keywords.split(" "))].join(" ");
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
getFiltredData("");



