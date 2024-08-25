// components/EvaluateButton.tsx

import React from 'react';
import Button from '@mui/material/Button';


interface EvaluateButtonProps {
  disabled: boolean;
}

const EvaluateButton: React.FC<EvaluateButtonProps> = ({ disabled }) => {
  return (
    <Button type="submit" disabled={disabled}
    style={{
   
      background: 'rgba(63, 212, 60, 1)',
      padding:'10px',
      border: '4px',
      borderRadius: '100px',
      color: 'white',
      fontSize: '24px',
      width: '150px',
      height: '50px',
      marginRight:'20px'

  }}
    >
      Evaluate
    </Button>
  );
};

export default EvaluateButton;