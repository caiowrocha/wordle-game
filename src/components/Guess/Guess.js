import React from 'react';

import { range } from '../../utils';

import { checkGuess } from '/src/game-helpers';

function Guess({ word, answer }) {
  
  const isCorrect = checkGuess(word, answer);
  
  return (
    <p className="guess">
      {range(5).map(num => {
        return (
          <span key={num} className={`cell ${isCorrect ? isCorrect[num].status : undefined}`}>
            {isCorrect ? isCorrect[num].letter : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
