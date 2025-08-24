document.addEventListener("DOMContentLoaded", () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 10;

  const guessInput = document.getElementById("guessInput");
  const checkGuessBtn = document.getElementById("checkGuess");
  const resultMessage = document.getElementById("resultMessage");
  const attemptsLeft = document.getElementById("attemptsLeft");

  // Événement utilisateur
  checkGuessBtn.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value, 10);

    // ici la Condition
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      resultMessage.textContent = "Merci de saisir un nombre entre 1 et 100.";
      return;
    }

    attempts--;
    attemptsLeft.textContent = attempts;

    if (userGuess === randomNumber) {
      resultMessage.textContent = "Bravo ! Tu as trouvé le bon nombre !";
      checkGuessBtn.disabled = true;
    } else if (attempts === 0) {
      resultMessage.textContent = `Perdu ! Le bon nombre était ${randomNumber}.`;
      checkGuessBtn.disabled = true;
    } else if (userGuess < randomNumber) {
      resultMessage.textContent = "Oups, c'est trop petit !";
    } else {
      resultMessage.textContent = "Oulà, c'est trop grand !";
    }

    guessInput.value = "";
  });
});
