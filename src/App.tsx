import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstChart from './components/first-chart';
import SecondChart from './components/second-chart';
import ThirdChart from './components/third-chart';


function App() {
  return (
    <div className="App">
      <FirstChart />
      <SecondChart />
      <ThirdChart />
    </div>
  );
}

export default App;
