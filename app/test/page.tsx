// app/test/page.tsx

'use client'

import React, { useState, useEffect, ChangeEvent, FormEvent, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // Adjusted import
import imageData from '../../components/ImageData'; // Adjust the path as needed
import { getTimerDuration, startTimer, clearTimer } from '../../components/GameTimer'; // Adjust the path as needed
import { INITIAL_LIVES, decreaseLives } from '../../components/GameLives'; // Adjust the path as needed
import EvaluationModal from '../../components/EvaluationModal'; // Adjust the path as needed
import GameOverModal from '../../components/GameOverModal'; // Adjust the path as needed
import GameCompleted from '../results/page';
import EvaluateButton from '../../components/EvaluateButton'; // Import the SubmitButton component
import Button from '@mui/material/Button';

const TOTAL_LEVELS = 10;

const areCaptionsSimilar = (userCaption: string, correctCaption: string): boolean => {
  const userWords = userCaption.toLowerCase().split(' ').filter(Boolean);
  const correctWords = correctCaption.toLowerCase().split(' ').filter(Boolean);
  return userWords.some(word => correctWords.includes(word));
};

const getRandomImage = (usedImages: Set<number>) => {
  const unusedImages = imageData.filter(image => !usedImages.has(image.id));
  if (unusedImages.length === 0) return null;
  return unusedImages[Math.floor(Math.random() * unusedImages.length)];
};

export default function Game() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const levelFromQuery = parseInt(searchParams.get('level') || '1', 10); // Extract level from query

  const [currentImage, setCurrentImage] = useState(() => getRandomImage(new Set()));
  const [caption, setCaption] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(levelFromQuery || 1); // Use level from URL or default to 1
  const [lives, setLives] = useState(INITIAL_LIVES);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [timer, setTimer] = useState(getTimerDuration(level));
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [usedImages, setUsedImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (intervalId) clearTimer(intervalId);

    if (timer <= 0) {
      setFeedback('Time is up! Game Over!');
      setGameOver(true);
      setButtonDisabled(true);
      setTimer(0); // Stop the timer
      return;
    }

    const id = startTimer(timer, setTimer, () => {
      setFeedback('Time is up! Game Over!');
      setGameOver(true);
      setButtonDisabled(true);
      setTimer(0); // Stop the timer
    });
    setIntervalId(id);

    return () => clearTimer(id);
  }, [timer]);

  useEffect(() => {
    setTimer(getTimerDuration(level));
  }, [level]);

  const handleCaptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCaption(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (caption.trim() === '') {
      setFeedback('Please enter a caption.');
      return;
    }

    const correctCaption = currentImage?.caption.toLowerCase();
    const userCaption = caption.trim().toLowerCase();

    if (correctCaption && areCaptionsSimilar(userCaption, correctCaption)) {
      handleCorrectAnswer();
    } else {
      handleIncorrectAnswer(correctCaption || '');
    }
  };

  const handleCorrectAnswer = useCallback(() => {
    if (intervalId) clearTimer(intervalId);
    setScore(prevScore => prevScore + 10);
    setFeedback('Caption is similar to the correct one! You scored 10 points.');
    setIsCorrect(true);
    setButtonDisabled(true);
    setShowScoreModal(true); // Show score modal

    // Automatically close the modal after 2 seconds
    setTimeout(() => {
      setShowScoreModal(false);

      if (level >= TOTAL_LEVELS) {
        setShowResults(true);
      } else {
        const nextImage = getRandomImage(usedImages);
        if (nextImage) {
          setUsedImages(prev => new Set(prev).add(nextImage.id));
          setCurrentImage(nextImage);
          setCaption('');
          setFeedback('');
          setIsCorrect(false);
          setLevel(prevLevel => prevLevel + 1);
          setButtonDisabled(false);
          setTimer(getTimerDuration(level + 1));
        } else {
          setFeedback('No more images available! Game Over!');
          setGameOver(true);
          setButtonDisabled(true);
          setTimer(0); // Stop the timer
        }
      }
    }, 2000); // Adjust the delay as needed
  }, [intervalId, level, usedImages]);

  const handleIncorrectAnswer = (correctCaption: string) => {
    setFeedback(`Incorrect caption. The correct caption was: "${correctCaption}". Try again!`);
    setIsCorrect(false);
    setLives(prevLives => {
      const newLives = decreaseLives(prevLives, () => {
        setFeedback('Out of lives! Game Over!');
        setGameOver(true);
        setButtonDisabled(true);
        setTimer(0); // Stop the timer
      });
      if (newLives > 0) {
        const nextImage = getRandomImage(usedImages);
        if (nextImage) {
          setUsedImages(prev => new Set(prev).add(nextImage.id));
          setCurrentImage(nextImage);
          setCaption('');
          setTimer(getTimerDuration(level));
        }
      }
      return newLives;
    });
  };

  const handleRestart = () => {
    setCurrentImage(getRandomImage(new Set()));
    setCaption('');
    setFeedback('');
    setScore(0);
    setLevel(levelFromQuery || 1); // Reset level from URL or default to 1
    setLives(INITIAL_LIVES);
    setGameOver(false);
    setShowResults(false);
    setShowScoreModal(false); // Hide score modal
    setButtonDisabled(false);
    setTimer(getTimerDuration(levelFromQuery || 1)); // Reset timer based on level
    setUsedImages(new Set());
  };

  const renderLives = (count: number) => {
    return '❤️'.repeat(count);
  };

  if (showResults) {
    return <GameCompleted score={score} onRestart={handleRestart} />;
  }

  if (gameOver) {
    return <GameOverModal score={score} onRestart={handleRestart} />;
  }

  return (
    <div style={{
      textAlign: 'center',
      border: '4px solid white',
      borderRadius: '25px',
      padding: '20px',
      width: '710px',
      height: '1200px',
      position: 'relative',
      top: '100px',
      left: '500px',
      backgroundColor: 'rgba(247, 250, 255, 0.8)',
      color: 'black'
    }}>
      <h1 style={{fontSize:'36px', fontWeight:'bold'}}>Level {level}</h1> <br/>
    
  {!gameOver && <h1 style={{fontSize:'30px', fontWeight:'bold', float:'left'}}>Lives: {renderLives(lives)}</h1>}
  <h1 style={{fontSize:'30px', fontWeight:'bold', float:'right'}}>🕒 : {timer}</h1>
  <br/>
  <br/>
  <br/>
  <br/>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        
        <img
          src={currentImage?.src}
          alt="Image for caption guessing"
          style={{ width: '500px', height: '500px' }}
        />
      </div><br/>
      <h1
        style={{
          fontSize: '24px',
          color: 'rgba(15, 98, 254, 1)'
        }}
      >AI-Generated Caption</h1><br/>
      <div
        style={{
          width: '466px',
          height: '64px',
          borderRadius: '4px 0px 0px 0px',
          border: '2px solid rgba(15, 98, 254, 1)',
          textAlign: 'center',
          backgroundColor: ' rgba(163, 195, 254, 1)',
          fontSize: '20px',
          position: 'relative',
          left: '90px'


        }}


      >
        {currentImage?.caption}
      </div><br />


       
      <form onSubmit={handleSubmit}>
        <textarea
          value={caption}
          onChange={handleCaptionChange}
          placeholder="Enter your caption"
          style={{
            resize: 'none',
            width: '466px',
            height: '116px',
            border: '2px solid rgba(15, 98, 254, 1)',
            backgroundColor: 'transparent'
          }}
        /><br /><br/>
        <EvaluateButton disabled={buttonDisabled} /> {/* Use the SubmitButton component */}
        <Button
                        href='/'
                        style={{
                            border: '4px',
                            borderRadius: '100px',
                            color: 'white',
                            fontSize: '24px',
                            background: 'rgba(15, 98, 254, 1)',
                            width: '120px',
                            height: '50px'

                        }}
                    >
                        Home
                    </Button>
      </form><br/>

      <h1 style={{fontSize:'30px'}}>Score earned: {score}</h1>

      {feedback && <p>{feedback}</p>}
      {isCorrect && !gameOver && (
        <div>
          <p>Your total score: {score}</p>
        </div>
      )}
      
      {showScoreModal && <EvaluationModal score={score} onClose={() => setShowScoreModal(false)} />}
    </div>
  );
}
