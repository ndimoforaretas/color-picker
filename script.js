"use strict";

const colorDisplay = document.getElementById("color-display");
const btnGenerate = document.getElementById("btn-generate");
const currentColorCode = document.getElementById("color-code");

// Generate a random color
function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

console.log(generateRandomColor());
// Display the random color on the screen

btnGenerate.addEventListener("click", () => {
  const randomColor = generateRandomColor();
  colorDisplay.style.backgroundColor = randomColor;
  // display the color code on the screen
  currentColorCode.textContent = randomColor;
});

// copy the color code to the clipboard
currentColorCode.addEventListener("click", () => {
  const colorCode = currentColorCode.textContent;
  navigator.clipboard.writeText(colorCode);
  alert("Color code copied to your clipboard!");
});
