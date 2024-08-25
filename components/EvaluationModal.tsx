'use client'

import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface EvaluationModalProps {
    score: number;
    onClose: () => void;
  }
  
  const EvaluationModal: React.FC<EvaluationModalProps> = ({ score, onClose }) => {
    return (
        <div>
            <Modal open>
                <Box style={{
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    color: 'black',
                    textAlign: 'center',
                    width: '769px',
                    height: '387px',

                }}
                    sx={style}>


                    <br />
                    <br />
                    <h1 style={{
                        fontWeight: 'bolder',
                        fontSize: '32px'
                    }}>

                        Evaluating...</h1>
                    <p
                        style={{
                            fontSize: '20px'
                        }}

                    >  <br />
                        <br />
                        <div style={progressBarContainerStyles}>
                            <div
                                style={{
                                    ...progressBarStyles,
                                    width: `${Math.min(score, 100)}%` // Ensure width does not exceed 100%
                                }}
                            />
                        </div>
                        <br />
                        <br />
                        Your current score: {score}
                    </p>


                    <br />
                    <br />
                    <br />
                    <br />
                </Box>
            </Modal>
        </div>
    );
}

export default EvaluationModal;

const progressBarContainerStyles: React.CSSProperties = {
    height: '16px',
    width: '100%',
    borderRadius: '8px',
    overflow: 'hidden',
    margin: '10px 0',
    background: 'linear-gradient(45deg, #e0e0e0, #f5f5f5)',
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)',
  };
  
  const progressBarStyles: React.CSSProperties = {
    height: '100%',
    backgroundColor: 'blue', // Blue color
    transition: 'width 0.4s ease',
    borderRadius: '8px 0 0 8px',
  };
  