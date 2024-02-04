// src/components/CO2Score.tsx
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import default styles

interface CO2ScoreProps {
  score: number;
  maxScore: number; // Assuming you have a maximum score to calculate the percentage
}

const CO2Score: React.FC<CO2ScoreProps> = ({ score, maxScore }) => {
  // Calculate the percentage for the circular progress bar
  const percentage = (score / maxScore) * 100;

  return (
    <div className="co2-score-container">
      <div className="co2-score-gauge">
        <CircularProgressbar
          value={percentage}
          text={`${score}/${maxScore}`}
          styles={
            buildStyles({
              // Customize the size, color, etc. here
              pathColor: `#638889`,
              textColor: "#638889",
              trailColor: "#9DBC98",
              backgroundColor: "#3e98c7",
            }) as any
          } // Cast styles as any to bypass the TS error
        />
      </div>
      <div className="co2-score-stats">
        {/* Replace these with actual data */}
        <div>Angestoßene Treibhausgase: xyz</div>
        <div>CO2: abc</div>
        <div>Keller: def</div>
        {/* Add more stats as needed */}
      </div>
      <div className="co2-score-icons">
        {/* Replace these with actual icons and text */}
        <div>
          <i className="your-icon-class"></i> 16 Bäume/Jahr
        </div>
        <div>
          <i className="your-icon-class"></i> 1234 km Abholzung
        </div>
        {/* Add more icon-text pairs as needed */}
      </div>
    </div>
  );
};

export default CO2Score;
