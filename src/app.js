let runningCount = 0;
let decksUsed = 1; // Start with one deck

document.getElementById("updateDecks").addEventListener("click", function() {
  decksUsed = parseFloat(document.getElementById("deckCount").value) || 1;
  updateCounts();
});

const cardValues = {
  "2": 1,
  "3": 1,
  "4": 1,
  "5": 1,
  "6": 1,
  "7": 0,
  "8": 0,
  "9": 0,
  "10": -1,
  J: -1,
  Q: -1,
  K: -1,
  A: -1
};

function updateCount(card) {
  runningCount += cardValues[card];
  updateCounts();
}

function updateCounts() {
  document.getElementById("count").textContent =
    "Running Count: " + runningCount;
  document.getElementById("trueCount").textContent =
    "True Count: " + (runningCount / decksUsed).toFixed(2);
}

function generateRandomNumber() {
  const numbers = [
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
    "A"
  ];
  const indexNumbers = Math.floor(Math.random() * numbers.length);
  const card = numbers[indexNumbers];
  updateCount(card);
  return card;
}

function generateNewCard() {
  const number = generateRandomNumber();
  const icons = document.getElementsByClassName("card-icon");
  for (let icon of icons) {
    icon.textContent = number.match(/[JQKA]/) ? number[0] : "♦"; // Simplified, usually you'd have a suit mapping
    icon.style.color =
      icon.textContent === "♦" || icon.textContent === "♥" ? "red" : "black";
  }
  document.getElementById("number").textContent = number;
}

document
  .getElementById("generateButton")
  .addEventListener("click", generateNewCard);
window.onload = generateNewCard;
