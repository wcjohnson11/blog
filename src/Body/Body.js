import React, { Component } from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import './Body.css';

class Body extends Component {
  render() {
    return (
      <div className="body" id="body">
        <About />
        <Projects />
      </div>
    );
  }
}

export default Body;
