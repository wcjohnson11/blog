import React, { Component } from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import './Body.css';

class Body extends Component {
  render() {
    return (
      <div className="body" id="body">
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default Body;
