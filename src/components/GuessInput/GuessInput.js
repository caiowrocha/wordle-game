import React, { useState } from 'react';

function GuessInput({ handleUpdateGuesses, gameStatus }) {
  const [guessWord, setGuessWord] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log({guessWord});
    handleUpdateGuesses(guessWord);
    setGuessWord('');
  }

  function handleTypeGuess(event) {
    const newGuess = event.target.value.toUpperCase();
    setGuessWord(newGuess);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">
        Enter guess:
      </label>
      <input 
        disabled={gameStatus !== 'running'}
        type="text" 
        id="guess-input" 
        required 
        pattern="[a-zA-Z]{5}"
        maxLength={5}
        value={guessWord} 
        onChange={handleTypeGuess}
        title="The word must have 5 letters"
      />
    </form>
  );
}

export default GuessInput;
