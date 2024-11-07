
function generateSecretCombination() {
    let combination = [];
    while (combination.length < 4) {
      let randomNum = Math.floor(Math.random() * 10);
      if (!combination.includes(randomNum)) {
        combination.push(randomNum);
      }
    }
    return combination;
  }
  

  let secretCombination = generateSecretCombination();
  let attempts = [];
  
  
  function submitGuess() {
    let guessInput = document.getElementById('guess').value;
    
    if (guessInput.length !== 4 || isNaN(guessInput)) {
      alert("A tentativa deve ser um número de 4 dígitos!");
      return;
    }
  
    let guess = guessInput.split('').map(num => parseInt(num));
    let bulls = 0;
    let cows = 0;
  
    
    guess.forEach((digit, index) => {
      if (digit === secretCombination[index]) {
        bulls++;
      } else if (secretCombination.includes(digit)) {
        cows++;
      }
    });
  
   
    attempts.push({ guess: guessInput, bulls, cows });
    updateAttemptsList();
  
    if (bulls === 4) {
      alert("Parabéns, você acertou a combinação!");
    }
  }
  

  function updateAttemptsList() {
    let attemptsList = document.getElementById('attemptsList');
    attemptsList.innerHTML = '';
    attempts.forEach(attempt => {
      let li = document.createElement('li');
      li.textContent = `Tentativa: ${attempt.guess} | Bulls: ${attempt.bulls} | Cows: ${attempt.cows}`;
      attemptsList.appendChild(li);
    });
  }
  

  function revealAnswer() {
    alert("A combinação secreta era: " + secretCombination.join(''));
  }
  