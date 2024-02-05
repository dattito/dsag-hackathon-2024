import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const increaseStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="App">
      <Header currentState={currentStep} totalStates={5} onNextStep={increaseStep} />
      <div className='Bodycontainer'>
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 onNextStep={increaseStep} />}
        {currentStep === 4 && <Step4 />}
        {currentStep === 5 && <Step5 />}
      </div>
    </div>
  );
};

export default App;
