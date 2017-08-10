import React, { Component } from 'react';
import Hero from './Hero/Hero.js';
import Body from './Body/Body.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Body />
      </div>
    );
  }
}

export default App;
