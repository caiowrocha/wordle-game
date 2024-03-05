import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput/GuessInput';
import GuessHistory from '../GuessHistory/GuessHistory';
import LoserBanner from '../LoserBanner/LoserBanner';
import WinnerBanner from '../WinnerBanner/WinnerBanner'

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [status, setStatus] = useState('running');

  const winner = status === 'won';
  const loser = status === 'lost';

  function handleUpdateGuesses(guess) {
    const newGuess = {
      value: guess,
      id: `${guess}-${Math.random()}`
    }
    const newGuessList = [...guesses, newGuess];
    setGuesses(newGuessList);

    if(newGuess.value === answer) {
      setStatus('won');
    } else if (newGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }
  }

  return (
  <>
    <GuessHistory 
      guessList={guesses} 
      answer={answer} 
    />
    <GuessInput 
      handleUpdateGuesses={handleUpdateGuesses} 
      gameStatus={status} 
    />
    {winner &&  <WinnerBanner guessesAmount={guesses.length}/>}
    {loser && <LoserBanner answer={answer} />}
  </>
  );
}

export default Game;
