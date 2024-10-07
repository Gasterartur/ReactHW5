import React from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="row">
        <Card />
        <Card appleBlue />
      </div>
      <div className="row">
        <Card googleBlue />
        <Card xingBlue />
      </div>
    </div>
  );
}

export default App;