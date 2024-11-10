document.getElementById('start-button').addEventListener('click', startTest);
document.getElementById('retry-button').addEventListener('click', resetTest);

let timer;
let timeLeft;
let correctChars = 0;
let totalChars = 0;

const difficulties = {
  easy: "The quick brown fox jumps over the lazy dog.",
  medium: "An average sentence that helps you type faster and more accurately.",
  hard: "Complex and challenging text to really test your typing skills and accuracy."
};

function startTest() {
  const difficulty = document.getElementById('difficulty-select').value;
  const countdown = parseInt(document.getElementById('countdown-select').value);

  document.getElementById('test-area').style.display = 'block';
  document.getElementById('text-display').innerHTML = difficulties[difficulty].split('').map(char => `<span>${char}</span>`).join('');
  document.getElementById('text-input').value = '';
  timeLeft = countdown;
  
  timer = setInterval(updateTimer, 1000);
  document.getElementById('text-input').addEventListener('input', checkInput);
}

function updateTimer() {
  document.getElementById('timer').innerText = `Time: ${timeLeft} seconds`;
  if (--timeLeft < 0) {
    clearInterval(timer);
    showResults();
  }
}

function checkInput() {
  const textDisplay = document.getElementById('text-display');
  const textInput = document.getElementById('text-input').value;
  const chars = textDisplay.querySelectorAll('span');

  totalChars = textInput.length;
  correctChars = 0;

  for (let i = 0; i < chars.length; i++) {
    const typedChar = textInput[i];
    const displayChar = chars[i];

    if (typedChar == null) {
      displayChar.classList.remove('correct', 'incorrect');
    } else if (typedChar === displayChar.innerText) {
      displayChar.classList.add('correct');
      displayChar.classList.remove('incorrect');
      correctChars++;
    } else {
      displayChar.classList.add('incorrect');
      displayChar.classList.remove('correct');
    }
  }

  const progressPercentage = (correctChars / chars.length) * 100;
  document.getElementById('progress').style.width = progressPercentage + '%';

  if (totalChars === chars.length) {
    clearInterval(timer);
    showResults();
  }
}

function showResults() {
  document.getElementById('test-area').style.display = 'none';
  document.getElementById('results').style.display = 'block';

  const countdown = parseInt(document.getElementById('countdown-select').value);
  const minutes = (countdown - timeLeft) / 60;
  const wpm = Math.round((correctChars / 5) / minutes);
  const accuracy = Math.round((correctChars / totalChars) * 100);

  document.getElementById('wpm-result').innerText = `WPM: ${wpm}`;
  document.getElementById('accuracy-result').innerText = `Accuracy: ${accuracy}%`;
}

function resetTest() {
  clearInterval(timer);
  correctChars = 0;
  totalChars = 0;
  document.getElementById('results').style.display = 'none';
  document.getElementById('test-area').style.display = 'none';
}
