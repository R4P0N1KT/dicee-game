//--------------------------------- DICE FACE CALCULATOR ---------------------------------//

const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const randomDiceImage = "images/dice" + randomNumber1 + ".png";
const randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

const imgs = document.querySelectorAll("img");
const img1 = imgs[0];
const img2 = imgs[1];

img1.setAttribute("src", randomDiceImage);
img2.setAttribute("src", randomDiceImage2);

//--------------------------------- TEXT MODIFICATOR ---------------------------------//

const titleModificated = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    titleModificated.innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    titleModificated.innerHTML = "Player 2 Wins!";
} else if (randomNumber1 === randomNumber2) {
    titleModificated.innerHTML = "Have a tie.";
}