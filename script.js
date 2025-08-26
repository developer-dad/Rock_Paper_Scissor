// Get elements
const yourScoreEl = document.getElementById("yourScore");
const computerScoreEl = document.getElementById("computerScore");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");
const resetBtn = document.getElementById("resetBtn");
const yourImage = document.getElementById("yourImage");
const computerImage = document.getElementById("computerImage");

// Track scores
let yourScore = 0;
let computerScore = 0;

// Choices
const choices = ["Rock", "Paper", "Scissor"];

// Function to get random computer choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to update screen image
function updateImage(container, choice) {
    container.innerHTML = "";
    const img = document.createElement("img");
    img.src = `images/${choice}.jpg`; // make sure your filenames are Rock.jpg, Paper.jpg, Scissor.jpg
    img.alt = choice;
    container.appendChild(img);
}

// Function to play a round
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    // Update images
    updateImage(yourImage, playerChoice);
    updateImage(computerImage, computerChoice);

    // Decide winner
    if (playerChoice === computerChoice) {
        // tie - no score
        return;
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissor") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissor" && computerChoice === "Paper")
    ) {
        yourScore++;
        yourScoreEl.textContent = yourScore;
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
    }
}

// Event listeners
rockBtn.addEventListener("click", () => playRound("Rock"));
paperBtn.addEventListener("click", () => playRound("Paper"));
scissorBtn.addEventListener("click", () => playRound("Scissor"));

resetBtn.addEventListener("click", () => {
    yourScore = 0;
    computerScore = 0;
    yourScoreEl.textContent = yourScore;
    computerScoreEl.textContent = computerScore;
    yourImage.innerHTML = `<img src="images/Scissor.jpg" alt="1">`;
    computerImage.innerHTML = `<img src="images/Paper.jpg" alt="2">`;
});
