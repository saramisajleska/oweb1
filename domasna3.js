const words = ["Слика", "Шарм", "Сенка", "Соба", "Жаба", "Езеро", "Игла", "Око", "Мачка", "Прст"];
let chosenWord = "";
let attempts = 5;
let currentGuess = "";

const hintElem = document.getElementById("hint");
const attemptsElem = document.getElementById("attempts");
const resultElem = document.getElementById("result");
const guessInput = document.getElementById("guess");
const checkBtn = document.getElementById("check-button");
const newGameBtn = document.getElementById("new-game-button");

// Функција за започнување на играта
function startGame() {
    attempts = 5;
    chosenWord = words[Math.floor(Math.random() * words.length)];
    let hint = chosenWord.slice(0, 2) + "_".repeat(chosenWord.length - 2);
    hintElem.textContent = "Помош: " + hint;
    attemptsElem.textContent = "Обиди: " + attempts;
    resultElem.textContent = "";
    guessInput.value = "";
    toggleInputs(true);
}

// Функција за проверка на внесениот збор
function checkGuess() {
    currentGuess = guessInput.value;
    if (currentGuess.length !== chosenWord.length) {
        alert("Внеси збор со најмногу " + chosenWord.length + " букви.");
        return;
    }

    attempts--;

    if (currentGuess == chosenWord) {
        resultElem.textContent = "Честитки! Го погоди зборот!";
        toggleInputs(false);
        alert("Играта е успешна!");
    } else {
        if (attempts > 0) {
            attemptsElem.textContent = "Обиди: " + attempts;
            alert("Неправилно! Обиди се повторно.");
        } else {
            resultElem.textContent = "Жал ми е, не го погоди зборот. Зборот беше: " + chosenWord;
            toggleInputs(false);
            alert("Играта не е успешна.");
        }
    }
}

function toggleInputs(state) {
    guessInput.disabled = !state;
    checkBtn.disabled = !state;
}

checkBtn.addEventListener("click", checkGuess);
newGameBtn.addEventListener("click", startGame);

startGame();