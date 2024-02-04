// src/components/DeliveryProcess.tsx
import React from 'react';

interface DeliveryStep {
  step: string;
  co2Value: number;
}

interface DeliveryProcessProps {
  steps: DeliveryStep[];
}

const DeliveryProcess: React.FC<DeliveryProcessProps> = ({ steps }) => {
  return (
    <div>
      <h2>Lieferkette</h2>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>{`${step.step}: ${step.co2Value} CO2`}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryProcess;
