import getData from "./request.js";
import { updateUI } from "./updateUI.js";
const input = document.querySelector(".search__input");

// const ul = document.querySelector(".cards");

const API = "https://countries-api-v7sn.onrender.com/countries?limit=250";
getData(API)
  .then((data) => updateUI(data.data))
  .catch((error) => console.log(error));

input.addEventListener("input", () => {
  const inputValue = input.value.toLowerCase();
  const CountryNomlari = document.querySelectorAll(".cards__title");
  CountryNomlari.forEach((item) => {
    if (item.textContent.toLowerCase().includes(inputValue)) {
      item.parentElement.parentElement.classList.remove("hidden");
    } else {
      item.parentElement.parentElement.classList.add("hidden");
    }
  });
});
