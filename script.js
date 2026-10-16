const message = document.querySelector('#message');
message.textContent = "I can see your mouse cursor.";
const wakeBtn = document.querySelector("#wakeBtn");
let awake = false;
function wakeWebsite() {
  awake = true;
  message.textContent = "WHO DARES WAKE MY SOURCE CODE?";
}
wakeBtn.addEventListener("click", wakeWebsite);
const angerText = document.querySelector("#angerText");
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
}