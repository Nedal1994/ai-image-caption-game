// Scoring.tsx
'use client'

import React from 'react';

export const calculatePoints = (level: number): number => {
  // Example: 10 points per level
  return level * 10;
};

export const displayScoreEvaluation = (score: number, onClose: () => void) => {
  return (
    <div style={modalStyles}>
      <h2 style={headerStyles}>Score Evaluation</h2>
      <p style={scoreTextStyles}>Your current score is: {score}</p>
      <div style={progressBarContainerStyles}>
        <div
          style={{
            ...progressBarStyles,
            width: `${score}%`
          }}
        />
      </div>
      <button style={buttonStyles} onClick={onClose}>Close</button>
    </div>
  );
};

// Inline CSS styles
const modalStyles: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '20px',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  zIndex: 1000
};

const headerStyles: React.CSSProperties = {
  margin: '0 0 10px 0',
  fontSize: '1.5em'
};

const scoreTextStyles: React.CSSProperties = {
  margin: '0 0 10px 0',
  fontSize: '1.2em'
};

const progressBarContainerStyles: React.CSSProperties = {
  height: '20px',
  width: '100%',
  backgroundColor: '#e0e0e0',
  borderRadius: '5px',
  overflow: 'hidden',
  margin: '10px 0'
};

const progressBarStyles: React.CSSProperties = {
  height: '100%',
  backgroundColor: '#4caf50',
  transition: 'width 0.3s'
};

const buttonStyles: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  outline: 'none',
  marginTop: '10px'
};
