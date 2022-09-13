let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let output = document.querySelector("#output");
const apiUrl = "https://api.funtranslations.com/translate/minion.json";

function getServerURL(text) {
  return encodeURI(apiUrl + "?text=" + text);
}

function handleClick() {
  fetch(getServerURL(input.value))
    .then((result) => result.json())
    .then((res) => {
      let data = res.contents.translated;
      output.innerText = data;
    });
}

// For testing

// function handleClick() {
//   console.log(input.value);
//   output.innerText = input.value;
// }

btn.addEventListener("click", handleClick);
