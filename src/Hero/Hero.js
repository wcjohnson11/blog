import React, { Component } from 'react';
import Bio from '../Bio/Bio.js';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <div className="banner"></div>
        <Bio />
      </div>
    );
  }
}

export default Hero;
