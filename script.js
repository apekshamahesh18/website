// Quiz Questions and Answer Logic
const questions = [
    "How did we first meet?",
    "What’s my favorite thing about you?",
    "Which place do we both want to visit together?",
    "What’s our most special date so far?"
];
const answers = [
    "9th grade",
    "Your smile",
    "Paris",
    "Our first kiss at the Lassi Shop"
];
let currentQuestion = 0;
// Display question
document.getElementById("question").innerText = questions[currentQuestion];

document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("landing").style.display = "none";
    document.getElementById("quiz").style.display = "block";
});
// Check answer
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    if (userAnswer.toLowerCase() === answers[currentQuestion].toLowerCase()) {
        alert("Correct!");
        nextSection();
    } else {
        alert("Try Again!");
    }
}
// Move to the next section
function nextSection() {
    if (currentQuestion === 0) {
        document.getElementById("timeline").style.display = "block";
    } else if (currentQuestion === 1) {
        document.getElementById("playlist").style.display = "block";
    } else if (currentQuestion === 2) {
        document.getElementById("countdown").style.display = "block";
    } else if (currentQuestion === 3) {
        document.getElementById("secret-note").style.display = "block";
        document.getElementById("virtual-gift").style.display = "block";
    }
    currentQuestion++;
    document.getElementById("answer").value = "";
    document.getElementById("question").innerText = questions[currentQuestion];
}
// Countdown Timer Logic
let countdownDate = new Date("Dec 14, 2024 00:00:00").getTime();
let timer = setInterval(() => {
    let now = new Date().getTime();
    let distance = countdownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("timer").innerText = ${days} days remaining!;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerText = "The special day has arrived!";
    }
}, 1000);
// Secret Love Note
const secretPhrase = "December 14, Our Beginning";
document.getElementById("secret-note").addEventListener("click", () => {
    let userInput = prompt("Type the secret phrase:");
    if (userInput === secretPhrase) {
        document.getElementById("love-note").innerText = "You are my forever love!";
    } else {
        alert("Wrong phrase, try again!");
    }
});
