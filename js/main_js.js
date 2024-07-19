import { languageSelect } from "./transelte.js";

const en_lang = document.getElementById("en_lang");
const es_lang = document.getElementById("es_lang");
const fr_lang = document.getElementById("fr_lang");
const all_lang = ["en", "es", "fr"];

//Вибір мови
// for (let key of languageSelect) {
//   console.log(key);
// }
en_lang.addEventListener("click", (en_lang) => {
  location.href = window.location.pathname + "#" + "en";
  location.reload();
});
es_lang.addEventListener("click", (es_lang) => {
  location.href = window.location.pathname + "#" + "es";
  location.reload();
});
fr_lang.addEventListener("click", (fr_lang) => {
  location.href = window.location.pathname + "#" + "fr";
  location.reload();
});

//Зміна мови
function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  console.log(hash);
  if (!all_lang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }

  document.querySelector(".lang-partner-text").innerHTML =
    languageSelect["partner-text"][hash];
  document.querySelector(".lang-food-text").innerHTML =
    languageSelect["food-text"][hash];
}

for (let key in languageSelect) {
  document.querySelector(".lang-" + key).innerHTML = languageSelect[key][hash];
}

changeLanguage();
