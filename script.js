const checkBtn = document.querySelector('.check');
const UserInputEL = document.querySelector('.guess');
const numEl = document.querySelector('.number');
const messageEL = document.querySelector('.message');
const scoreEL = document.querySelector('.label-score');
const highScoreEl = document.querySelector('.label-highscore');
const againBtn = document.querySelector('.again');

// creating a random number
let randomNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

checkBtn.addEventListener('click', function () {
  const UserInput = UserInputEL.value;
  if (UserInput > randomNum) {
    messageEL.textContent = 'Too high';
  } else if (UserInput < randomNum) {
    messageEL.textContent = 'Too low';
  } else {
    messageEL.textContent = 'Correct';
    numEl.textContent = randomNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    checkBtn.disabled = true;
    if (highScore < score) {
      highScore = score;
    }
    highScoreEl.textContent = `🥇 Highscore: ${highScore}`;
  }
  scoreEL.textContent = `💯 Score: ${score--}`;

  if (score < 0) {
    messageEL.textContent = 'You lose';
    checkBtn.disabled = true;
    document.querySelector('body').style.backgroundColor = '#FF0000';
  }
});

againBtn.addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  messageEL.textContent = 'Start guessing...';
  numEl.textContent = '?';
  score = 20;
  scoreEL.textContent = `💯 Score: ${score}`;
  checkBtn.disabled = false;
  randomNum = Math.floor(Math.random() * 20) + 1;
});
