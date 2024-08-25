export const TIMER_DURATIONS = [90, 80, 70, 60, 50, 40, 30, 20, 15, 10];

export const getTimerDuration = (level: number): number => {
  return TIMER_DURATIONS[Math.min(level - 1, TIMER_DURATIONS.length - 1)];
};

export const startTimer = (duration: number, onTick: (timeLeft: number) => void, onComplete: () => void) => {
  let timeLeft = duration;
  const id = setInterval(() => {
    if (timeLeft <= 1) {
      clearInterval(id);
      onComplete();
    } else {
      timeLeft -= 1;
      onTick(timeLeft);
    }
  }, 1000);

  return id;
};

export const clearTimer = (intervalId: NodeJS.Timeout | null) => {
  if (intervalId) clearInterval(intervalId);
};


// 'use client'

// import React, { useEffect, useState } from 'react'
// import GameOverModal from './GameOverModal';

// export default function BasicModal() {
//     const [openModal, setOpenModal] = useState(false);
//     const [timeLeft, setTimeLeft] = useState(10)

//     const handleOpen = () => setOpenModal(true)

//     useEffect(() => {
//         if (timeLeft <= 0) {
//             return 
//         }
//         const timeout = setTimeout(() => {
//             setTimeLeft(timeLeft - 1)
//         }, 1000)

//         return () => clearTimeout(timeout)
//     }, [timeLeft])

//     console.log(timeLeft);
    

//     return (
//         <>
//         {timeLeft || <GameOverModal />}
//         </>
//     );
// }
