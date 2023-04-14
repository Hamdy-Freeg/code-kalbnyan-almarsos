import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';

function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('app running');

  const togglePHandler = useCallback(() => {
    if (allowToggle) {
      setShowP((prevShowP) => !prevShowP);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showP} />
      <Button onClick={allowToggleHandler}>Show Paragraph</Button>
      <Button onClick={togglePHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
