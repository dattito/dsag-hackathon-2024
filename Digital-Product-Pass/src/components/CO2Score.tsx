// src/components/CO2Score.tsx
import React from 'react';

interface CO2ScoreProps {
  score: number;
}

const CO2Score: React.FC<CO2ScoreProps> = ({ score }) => {
  return (
    <div>
      <h2>CO2 Score</h2>
      <p>{score}</p>
    </div>
  );
};

export default CO2Score;
