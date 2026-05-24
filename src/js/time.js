const countdownDisplay = document.getElementById('countdown');
const startButton = document.getElementById('startButton');

let timeLeft = 10;
let intervalId;
let timeoutId;

startButton.addEventListener('click', () => {
  // Reset
  timeLeft = 10;
  countdownDisplay.textContent = timeLeft;

  clearInterval(intervalId);
  clearTimeout(timeoutId);

  // Start countdown
  intervalId = setInterval(() => {
    timeLeft--;
    if (timeLeft >= 0) {
      countdownDisplay.textContent = timeLeft;
    }
  }, 1000);

  // Stop after 10 seconds
  timeoutId = setTimeout(() => {
    clearInterval(intervalId);
    countdownDisplay.textContent = "Time's up!";
  }, timeLeft * 1000);
});
