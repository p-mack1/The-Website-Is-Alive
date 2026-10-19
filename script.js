const message = document.querySelector('#message');
message.textContent = "I can see your mouse cursor.";
const wakeBtn = document.querySelector("#wakeBtn");
let awake = false;
function wakeWebsite() {
  awake = true;
  message.textContent = "WHO DARES WAKE MY SOURCE CODE?";
}
wakeBtn.addEventListener("click", wakeWebsite);
const angerText = document.querySelector("#angerLevel");
const angerFill = document.querySelector("#angerFill");
let anger = 0;
let ended = false;
function updateAnger() {
  angerText.textContent = anger + "/ 100";
  angerFill.style.width = anger + "%";
}
const pokeBtn = document.querySelector("#pokeBtn");
let pokeCount = 0;
function addAnger(amount) {
  if (ended) return;
  anger = Math.min(100, anger + amount);
  updateAnger();
  if (anger >= 100) {
    ended = true;
    message.textContent = "GAME OVER> THE WEBSITE BANNED YOU.";
  } else if (anger >= 60) {
    message.textContent = "I AM RUNNING OUT OF PAITENCE!";
  }
}
function pokeWebsite() {
  if (ended) return;
  if (!awake) {
    message.textContent = "Wake me up first!";
    return;
  }
  pokeCount++;
  if (pokeCount === 2) {
    clueOne.textContent = "Clue 1: The first digit is 4.";
  }
  addAnger(15);
  if (!ended && anger < 60) {
    message.textContent = "STOP POKING ME!";
  }
}
pokeBtn.addEventListener("click", pokeWebsite);

const clueOne = document.querySelector("#clueOne");

const apologyBtn = document.querySelector("#apologyBtn");
const clueTwo = document.querySelector("#clueTwo");
let apologyCount = 0;
function apologize() {
  if (ended || !awake) return;
  apologyCount++;
  if (apologyCount === 1) {
    anger = Math.max(0, anger - 10);
    updateAnger();
    message.textContent = "Apology accepted. Barely.";
  } else {
    addAnger(10);
    if (!ended) message.textContent = "TOO MANY APOLOGIES!";
  }
  if (apologyCount >= 2 && !ended) {
    clueTwo.textContent = "Clue 2: The second digit is 2.";
  }
}
apologyBtn.addEventListener("click", apologize);

const mysteryBtn = document.querySelector("#mysteryBtn");
const clueThree = document.querySelector("#clueThree");
let mysteryCount = 0;
const strangeMessages = [
  "YOUR CURSOR IS SUSPICIOUS.",
  "I KNOW WHAT YOU DID IN CSS.",
  "PLEASE STOP CLICKING MY FEELINGS."
];
function mysteryButton() {
  if (ended || !awake) return;
  mysteryCount++;
  const index = Math.floor(Math.random() * strangeMessages.length);
  message.textContent = strangeMessages[index];
  mysteryBtn.classList.toggle("dodging");
  addAnger(8);
  if (mysteryCount >= 3 && !ended) {
    clueThree.textContent = "Clue 3: The third digit is 7.";
  }
}
mysteryBtn.addEventListener("click", mysteryButton);

const shutdownBtn = document.querySelector("#shutdownBtn");
const codeInput = document.querySelector("#codeInput");
const result = document.querySelector("#result");
const game = document.querySelector(".game");
function shutdownWebsite() {
  if (ended || !awake) return;
  const allClues = pokeCount >= 2 &&
    apologyCount >= 2 && mysteryCount >= 3;
    if(!allClues) {
      result.textContent = "Find all the clues first.";
      return;
    }
    if (codeInput.value.trim() === "427") {
      ended = true;
      game.classList.add("victory");
      message.textContent = "SHUTDOWN SUCCESSFUL!";
      result.textContent = "The website shut down.";
    } else {
      result.textContent = "Wrong code. The website noticed.";
      addAnger(12);
    }
  }
shutdownBtn.addEventListener("click", shutdownWebsite);

const resetBtn = document.querySelector("#resetBtn");
function resetGame() {
  anger = 0;
  awake = false;
  ended = false;
  pokeCount = 0;
  apologyCount = 0;
  mysteryCount = 0;
  message.textContent = "Everything is completely normal.";
  clueOne.textContent = "Clue 1: ???";
  clueTwo.textContent = "Clue 2: ???";
  clueThree.textContent = "Clue 3: ???";
  result.textContent = "Waiting for clues...";
  codeInput.value = "";
  game.classList.remove("victory");
  mysteryBtn.classList.remove("dodging");
  wakeBtn.textContent = "Wake Website";
  updateAnger();
}
resetBtn.addEventListener("click", resetGame);