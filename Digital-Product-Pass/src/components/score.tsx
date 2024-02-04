import React, { useState, useEffect } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import default styles

interface CO2ScoreProps {
  score: number;
  maxScore: number; // Assuming you have a maximum score to calculate the percentage
}

const Score: React.FC<CO2ScoreProps> = ({ score, maxScore }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar fill
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= score) {
          clearInterval(interval);
          return score;
        }
        return prevProgress + 1; // This controls the speed of the animation
      });
    }, 20); // The duration in milliseconds for each increment
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [score]);

  const percentage = (progress / maxScore) * 100;

  return (
    <div className="co2-score-container h-48 w-48">
      <div className="co2-score-gauge">
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            // Customize the size, color, etc. here
            pathColor: "var(--transparent-green-color)",
            trailColor: "#ffffff00",
            backgroundColor: "#ffffff00",
            // pathTransition: "stroke-dashoffset 0.5s ease-in-out 0s", // Smooth transition for the stroke
            pathTransitionDuration: 0,
          })}
        >
          <p className="text-5xl text-transparent-green">{progress}</p>
          <p>von {maxScore}</p>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default Score;
