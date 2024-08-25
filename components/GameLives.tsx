export const INITIAL_LIVES = 3;

export const decreaseLives = (lives: number, onGameOver: () => void): number => {
  const newLives = lives - 1;
  if (newLives <= 0) {
    onGameOver();
    return 0;
  }
  return newLives;
};


// 'use client'

// import { useState } from 'react';
// import GameOverModal from './GameOverModal';

// export default function Home() {
//   const [lives, setLives] = useState(3);
//   const [showModal, setShowModal] = useState(false);

//   const handleLoseLife = () => 
//     {
//     setLives((prevLives) => 
//       {
//       const newLives = prevLives - 1;
//       if (newLives <= 0) 
//         {
//         setShowModal(true);
//         }
//       return newLives;
//     });
//   };

//   return (
//     <div>
   
//         {Array.from({ length: lives }).map((_, index) => (
//           <span key={index}>❤️</span>
//         ))}
//      {/* <button onClick={handleLoseLife}>click</button> */}
//       {showModal && <GameOverModal/>}
//     </div>
//   );
// }