'use client'

import React from 'react';
import Box from '@mui/material/Box';
import { Button, ButtonGroup } from '@mui/material';
import Modal from '@mui/material/Modal';

interface GameOverModalProps {
    score: number;
    onRestart: () => void;
}

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

const GameOverModal: React.FC<GameOverModalProps> = ({ score, onRestart }) => {
    return (
        <div>
            <Modal open>
                <Box style={{
                    backgroundColor: 'rgba(247, 250, 255, 0.8)',
                    color: 'black',
                    textAlign: 'center',
                    width: '710px',
                    height: '500px',

                }}
                    sx={style}>



                    <h1 style={{
                        fontWeight: 'bolder',
                        fontSize: '48px'
                    }}>

                        Game Over<br /> 😞</h1>


                    <p
                        style={{
                            fontSize: '36px'
                        }}

                    >
                        Try harder next time.<br />You earned  {score} points
                    </p>

                    <br />
                    <br />
                    <br />
                    <br />
                    {/* <button onClick={onRestart}>Restart Game</button>  */}

                    <ButtonGroup>
                        <Button style={{ background: 'blue', color: 'white', marginRight: '20px', fontSize: '24px', border: 'none', borderRadius: '24px' }} href='/'>Home</Button>
                        <Button style={{ background: 'red', color: 'white', fontSize: '24px', border: 'none', borderRadius: '24px' }} onClick={onRestart}>Restart</Button>
                    </ButtonGroup>



                </Box>
            </Modal>
        </div>
    );
};

export default GameOverModal;