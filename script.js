"use strict";

// get the HTML elements by their id
const btn = document.getElementById("helloBtn");
const greeting = document.getElementById("greeting");

// colors the button cycles through
const colors = ["#2E7D32", "#1565C0", "#EF6C00", "#AD1457"];
let colorIndex = -1;   // -1 so the first click uses colors[0]
let clickCount = 0;

// return the next color, starting over after the last one
function getNextColor() {
    colorIndex++;
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
    return colors[colorIndex];
}

// run this code every time the button is clicked
btn.addEventListener("click", () => {
    clickCount++;
    greeting.textContent = "Hello, World!";
    btn.style.backgroundColor = getNextColor();
    console.log(`Click ${clickCount}: color is ${colors[colorIndex]}`);
});