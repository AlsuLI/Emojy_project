let div = document.querySelector(".cards");
let input = document.querySelector(".searcher");
let title = document.querySelectorAll(".emoji__discription");
let emoji = document.querySelector(".container");
let data = [
  {
    title: "100",
    symbol: "💯",
    keywords:
      "hundred points symbol symbol wow wow win win perfect perfect parties parties",
  },
  {
    title: "1234",
    symbol: "🔢",
    keywords: "input symbol for numbers symbol",
  },
  {
    title: "Grinning",
    symbol: "😀",
    keywords: "grinning face happy smiley emotion emotion",
  },
  {
    title: "Grimacing",
    symbol: "😬",
    keywords: "grimacing face silly smiley emotion emotion selfie selfie",
  },
  {
    title: "Grin",
    symbol: "😁",
    keywords:
      "grinning face with smiling eyes happy silly smiley emotion emotion good good selfie selfie",
  },
  {
    title: "Joy",
    symbol: "😂",
    keywords:
      "face with tears of joy happy silly smiley cry laugh laugh emotion emotion sarcastic sarcastic",
  },
  {
    title: "Smiley",
    symbol: "😃",
    keywords:
      "smiling face with open mouth happy smiley emotion emotion good good",
  },
  {
    title: "Smile",
    symbol: "😄",
    keywords:
      "smiling face with open mouth and smiling eyes happy smiley emotion emotion",
  },
  {
    title: "Sweat Smile",
    symbol: "😅",
    keywords:
      "smiling face with open mouth and cold sweat smiley workout sweat emotion emotion",
  },
  {
    title: "Laughing",
    symbol: "😆",
    keywords:
      "smiling face with open mouth and tightly-closed eyes happy smiley laugh laugh emotion emotion",
  },
  {
    title: "Innocent",
    symbol: "😇",
    keywords: "smiling face with halo smiley emotion emotion",
  },
  {
    title: "Wink",
    symbol: "😉",
    keywords: "winking face silly smiley emotion emotion",
  },
  {
    title: "Blush",
    symbol: "😊",
    keywords:
      "smiling face with smiling eyes happy smiley emotion emotion good good beautiful beautiful",
  },
  {
    title: "Slight Smile",
    symbol: "🙂",
    keywords: "slightly smiling face happy smiley",
  },
  {
    title: "Upside Down",
    symbol: "🙃",
    keywords: "upside-down face silly smiley sarcastic sarcastic",
  },
  {
    title: "Relaxed",
    symbol: "☺",
    keywords: "white smiling face happy smiley",
  },
  {
    title: "Yum",
    symbol: "😋",
    keywords:
      "face savouring delicious food happy silly smiley emotion emotion sarcastic sarcastic good good",
  },
  {
    title: "Relieved",
    symbol: "😌",
    keywords: "relieved face smiley emotion emotion",
  },
  {
    title: "Heart Eyes",
    symbol: "😍",
    keywords:
      "smiling face with heart-shaped eyes happy smiley love sex heart eyes emotion emotion beautiful beautiful",
  },
  {
    title: "Kissing Heart",
    symbol: "😘",
    keywords: "face throwing a kiss smiley love sexy",
  },
  {
    title: "Kissing",
    symbol: "😗",
    keywords: "kissing face smiley sexy",
  },
  {
    title: "Kissing Smiling Eyes",
    symbol: "😙",
    keywords: "kissing face with smiling eyes smiley sexy",
  },
  {
    title: "Kissing Closed Eyes",
    symbol: "😚",
    keywords: "kissing face with closed eyes smiley sexy",
  },
  {
    title: "Stuck Out Tongue Winking Eye",
    symbol: "😜",
    keywords:
      "face with stuck-out tongue and winking eye happy smiley emotion emotion parties parties",
  },
  {
    title: "Stuck Out Tongue Closed Eyes",
    symbol: "😝",
    keywords:
      "face with stuck-out tongue and tightly-closed eyes happy smiley emotion emotion",
  },
  {
    title: "Stuck Out Tongue",
    symbol: "😛",
    keywords: "face with stuck-out tongue smiley sex emotion emotion",
  },
  {
    title: "Money Mouth",
    symbol: "🤑",
    keywords:
      "money-mouth face smiley win win money money emotion emotion boys night boys night",
  },
  {
    title: "Nerd",
    symbol: "🤓",
    keywords: "nerd face smiley glasses",
  },
  {
    title: "Sunglasses",
    symbol: "😎",
    keywords:
      "smiling face with sunglasses silly smiley emojione glasses boys night boys night",
  },
  {
    title: "Hugging",
    symbol: "🤗",
    keywords: "hugging face smiley hug thank you",
  },
  {
    title: "Smirk",
    symbol: "😏",
    keywords: "smirking face silly smiley sexy sarcastic sarcastic",
  },
];


function createCard({ title, symbol, keywords }) {
  let div = document.createElement("div");
  div.className = "cards";
  div.innerHTML = `<h2>${symbol}</h2>
        <h3 class = 'emoji__discription'>${title}</h3> 
        <p>${keywords}</p>`;
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



