import React from 'react';

function WinnerBanner({ guessesAmount }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{ guessesAmount === 1 ? '1 guess' : `${guessesAmount} guesses` }</strong>.
      </p>
    </div>
  );
}

export default WinnerBanner;
