// src/App.tsx
import React from 'react';
import './App.css';
import ArticleHeader from './components/Product';
import CO2Score from './components/CO2Score';
import DeliveryProcess from './components/DeliveryProcess';
import Water from "./assets/WaterBottle.webp"

const App: React.FC = () => {
  // Example data
  const articleTitle = 'Water Bottle';
  const articleImageUrl = Water;
  const co2Score = 81;
  const maxScore = 100;
  const deliverySteps = [
    { step: 'Manufacturing', co2Value: 2.0 },
    { step: 'Transportation', co2Value: 1.5 },
    // Add more steps as needed
  ];

  return (
    <div className="App">
      <ArticleHeader title={articleTitle} imageUrl={articleImageUrl} />
      <CO2Score score={co2Score} maxScore={maxScore}/>
      <DeliveryProcess steps={deliverySteps} />
    </div>
  );
}

export default App;
