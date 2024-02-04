// src/components/CO2Score.tsx
import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import default styles
import treeIcon from "../assets/tree.svg";
import carIcon from "../assets/car.svg";

interface CO2ScoreProps {
  score: number;
  maxScore: number; // Assuming you have a maximum score to calculate the percentage
}

const CO2Score: React.FC<CO2ScoreProps> = ({ score, maxScore }) => {
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
    }, 40); // The duration in milliseconds for each increment
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [score]);

  const percentage = (progress / maxScore) * 100;

  return (
    <div className="co2-score-container">
      <div className="co2-score-gauge">
        <CircularProgressbar
          value={percentage}
          text={`${progress}/${maxScore}`}
          styles={buildStyles({
            // Customize the size, color, etc. here
            pathColor: `#638889`,
            textColor: "#638889",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
            transition: "stroke-dashoffset 0.5s ease 0s", // Smooth transition for the stroke
          })}
        />
      </div>
      <div className="co2-score-stats">
        {/* Replace these with actual data */}
        <h3>CO2 Score</h3>
        <div>Ausgestoßene Treibhausgase: 0,2 Tonnen</div>
        <div>CO2: 2 kg</div>
        <div>Wasserverbrauch: 150 Liter</div>
        <div>Methan: xxx</div>
        {/* Add more stats as needed */}
      </div>
      <div className="co2-score-icons">
        {/* Replace these with actual icons and text */}
        <h3>Entspricht</h3>
        <div>
          <img src={treeIcon} alt="Baum" /> 16 Bäume die gepflanzt werden müssen
        </div>
        <div>
        <img src={carIcon} alt="Auto" /> 1234 gefahrenen Kilometer mit dem Auto
        </div>
        {/* Add more icon-text pairs as needed */}
      </div>
    </div>
  );
};

export default CO2Score;
