'use client'

import React, {useState, useEffect} from 'react';
import EvaluationProgressBar from './EvaluationProgressBar'
import EvaluateButton from './EvaluateButton';

const GamePoints = () => {

    const [points, setPoints] = useState(1)

    // This function is based on if the user captions the image,
    // then points will be added at the bottom

    const addPoints = () =>{
        if (points < 1) 
            {
                setPoints((i) => i + 1)
            }
    }



    return (
        <div>
            <button onClick={addPoints}>click</button>
        </div>
    );
}

export default GamePoints;
