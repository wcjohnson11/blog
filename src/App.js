import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div id="main">
          <h1>Will Johnson</h1>
          <p className="App-intro">
           Welcome to my corner of the web :)
          </p>
          <h2>Code</h2>
          <p className="App-intro">
           Screenshots/links to code that I've written
          </p>
          <a href="/projects"><i>Click here to see more</i></a>
          <h2>Words</h2>
          <p className="App-intro">
          Screenshots/links to blog posts I've written
          </p>
          <a href="/blog"><i>Click here to see more</i></a>
        </div>
      </div>
    );
  }
}

export default App;
