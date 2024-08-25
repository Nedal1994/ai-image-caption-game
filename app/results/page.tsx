'use client'

import React from 'react';
import Link from "next/link"
import Button from '@mui/material/Button';

interface GameCompletedProps {
  score: number;
  onRestart: () => void;
}

const GameCompleted: React.FC<GameCompletedProps> = ({ score, onRestart }) => {
  return (


    <div
      style={{
        textAlign: 'center',
        border: '4px solid white',
        borderRadius: '25px',
        padding: '20px',
        width: '710px',
        height: '504px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(247, 250, 255, 0.8)',
        color: 'black'
      }}

    ><br/><br/>

      <h1
        style={{
          fontSize: '32px'
        }}
      >Congratulations🎉</h1><br />


      <p
        style={{
          fontSize: '24px'
        }}

      >
        Your final score: {score}
      </p>        <br />

      {/* <h2>Points</h2> */}

      <br />
      <br />
      <br />
      <Button href='/levels'

        style={{
          border: '4px',
          borderRadius: '4px',
          color: 'white',
          fontSize: '24px',
          background: 'rgba(205, 26, 26, 1)',
          padding: '15px',
          position: 'relative',
          right: '50px'

        }}

        onClick={onRestart}

      >
        Play again
      </Button>
      <Button href='/'

        style={{
          border: '4px',
          borderRadius: '4px',
          color: 'white',
          fontSize: '24px',
          background: 'rgba(15, 98, 254, 1)',
          padding: '15px',
          position: 'relative',
          left: '70px'

        }}



      >
        Back to tasks
      </Button>

    </div>
  );
};

export default GameCompleted;