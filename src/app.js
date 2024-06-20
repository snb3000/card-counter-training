/* eslint-disable */
import "bootstrap";
import "./style.css";

const generateRandomIcon = () => {
  const icons = ["♠", "♣", "♥", "♦"];
  return icons[Math.floor(Math.random() * icons.length)];
};

const generateRandomNumber = () => {
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  return numbers[Math.floor(Math.random() * numbers.length)];
};

let generateNewCard = () => {
  let randomIcon = generateRandomIcon();
  let icons = document.querySelectorAll(".card-icon");
  icons.forEach((icon) => {
    icon.innerHTML = randomIcon;
    icon.style.color =
      randomIcon === "♦" || randomIcon === "♥" ? "red" : "black";
  });

  document.querySelector("#number").innerHTML = generateRandomNumber();
};

document
  .getElementById("generateButton")
  .addEventListener("click", generateNewCard);
