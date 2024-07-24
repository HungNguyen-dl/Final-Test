const diceButton = document.getElementById("dice");
diceButton.addEventListener("click", rollDice);

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetBets);

const resultImg = document.querySelectorAll(".result img");

const options = document.querySelectorAll(".option");
options.forEach((option) => option.addEventListener("click", placeBet));

// Đặt cược
const maxBet = 3;
let sumBet = 0;
function placeBet(event) {
    if (sumBet >= maxBet) return;
    const span = event.currentTarget.querySelector("span");
    const bet = parseInt(span.textContent);
    if (bet < maxBet && sumBet < maxBet) {
        span.textContent = bet + 1;
        sumBet++;
    }
}
// reset cược
function resetBets() {
    options.forEach((option) => (option.querySelector("span").textContent = "0"));
    sumBet = 0;
}
// Random img
const img = [
    "bau.png",
    "cua.png",
    "tom.png",
    "ca.png",
    "huou.png",
    "ga.png"
];

function randomImage() {
    return img[Math.floor(Math.random() * img.length)];
}
// Quay
let isRolling = false;
function rollDice() {
    if (isRolling) return;
    isRolling = true;
    diceButton.disabled = true;
    resetButton.disabled = true;
    options.forEach((option) => (option.style.pointerEvents = "none"));

    let i = 0;
    const interval = setInterval(() => {
        resultImg.forEach((img) => (img.src = `./baucua/${randomImage()}`));
        i++;
        if (i >= 100) {
            clearInterval(interval);
            isRolling = false;
            diceButton.disabled = false;
            resetButton.disabled = false;
            options.forEach((option) => (option.style.pointerEvents = "auto"));
        }
    }, 50);
}
