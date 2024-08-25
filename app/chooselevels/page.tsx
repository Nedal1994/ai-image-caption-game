// app/choose-levels/page.tsx

'use client'

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useRouter } from 'next/navigation';

export default function ChooseLevelsPage() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const router = useRouter();

  const handleLevelSelect = (levelId: number) => {
    setSelectedLevel(levelId);
    // Navigate to the game page with the selected level as a query parameter
    router.push(`/test?level=${levelId}`);
  };

  const getButtonStyle = (levelId: number) => ({
    borderRadius: '70px',
    fontSize: '24px',
    width: '220px',
    marginRight: '20px',
    border: '2px solid',
    backgroundColor: selectedLevel === levelId ? 'rgba(15, 98, 254, 1)' : 'transparent',
    color: selectedLevel === levelId ? 'white' : 'white',
  });

  return (
    <div style={{ textAlign: 'center' }}>
         <br/>
      <br/>
      <br/>
      <br/><h1 style={{ fontSize: '48px' }}>Level Select</h1>
      <br/>
      <br/>
  

      <br/>
      <br/>
      <ButtonGroup size="large" style={{ height: '100px' }}>
        {[1, 2, 3, 4, 5].map(level => (
          <Button
            key={level}
            style={getButtonStyle(level)}
            onClick={() => handleLevelSelect(level)}
          >
            Level {level}
          </Button>
        ))}
      </ButtonGroup>
      <br /><br />
      <ButtonGroup size="large" style={{ height: '100px' }}>
        {[6, 7, 8, 9, 10].map(level => (
          <Button
            key={level}
            style={getButtonStyle(level)}
            onClick={() => handleLevelSelect(level)}
          >
            Level {level}
          </Button>
        ))}
      </ButtonGroup>   <br/>
      <br/>
      <br/>
      <br/>
      <br />
      <Button
        href='/'
        style={{
          border: '4px',
          borderRadius: '100px',
          color: 'white',
          fontSize: '36px',
          background: 'rgba(15, 98, 254, 1)',
          width: '375px',
          height: '80px'
        }}
      >
        Home
      </Button>
    </div>
  );
}
