const ans = Math.round(Math.random() * 100 + 1);
console.log(ans);
const form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const input = parseInt(document.querySelector('#guessField').value);
    console.log(input);
    let guessArr = [];
    let prev = Array(document.querySelector('.guesses'));
    console.log(prev);
    const livesElement = document.querySelector('.lastResult');
    let lives = parseInt(livesElement.innerHTML, 10);
    console.log(lives);

    const stat = document.querySelector('.lowOrHi');

    for (i = lives; i > 0; i--) {
        if (input === ans) {
            stat.innerHTML = 'You guessed correct number';
            break;
        } else if (input < ans) {
            stat.innerHTML = 'Your guess is small';
            lives--;
            livesElement.innerHTML = lives;
            break;
        } else {
            stat.innerHTML = 'Your guess is larger.';
            lives--;
            livesElement.innerHTML = lives;
            break;
        }
        prev.innerHTML = guessArr.push(input);
    }
    if (lives == 0) {
        stat.innerHTML = `Sorry but you lost. The answer was ${ans}`;
    }
    return;
});
