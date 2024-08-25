'use client'

import Link from "next/link"
import Button from '@mui/material/Button';
import { AwesomeButton } from "react-awesome-button";

const Main = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '36px' }}>Welcome to the AI Image Caption game</h1>
            <br />
            <br />
            <br />
            <br />
            <br />

            <div
                style={{
                    display: 'inline-block',
                    textAlign: 'center',
                    border: '4px solid white',
                    borderRadius: '25px',
                    padding: '20px',
                    width: '710px',
                    height: '357px',
                    backgroundColor: 'rgba(247, 250, 255, 0.8)',
                    color: 'black'
                }}
            >
                <h1 style={{ fontSize: '40px' }}>Image Captioning Task</h1>
                <br />
                <p style={{ fontSize: '24px' }}>
                    Please read the instruction below <br />before you start the game.
                </p>
                <br />
                <br />
                <Button href='/chooselevels'
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
                    Start
                </Button>
            </div>
            <br /><br /><br /><br /><br />

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <section
                    style={{
                        textAlign: 'left',
                        fontSize: '20px',
                        width: '80%',
                        maxWidth: '800px'  // Adjust max-width to fit the content better
                    }}
                >
                    <h2 style={{ fontSize: '24px', color: 'rgba(15, 98, 254, 1)' }}>
                        Instruction:
                    </h2>
                    In this task, you will be provided with an image and an AI-generated caption. 
                    Your goal is to refine and enhance the caption to make it SEO-friendly and include trending hashtags. 
                    The refined caption should be unique, engaging, and relevant to the image. Your caption will be evaluated by an AI system, 
                    and you will receive points and tokens based<br /> on the quality of your caption.
                </section>
            </div>
        </div>
    )
}

export default Main
