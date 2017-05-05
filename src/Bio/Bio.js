import React, { Component } from 'react';
import { Element, Events, Link, scrollSpy } from 'react-scroll';
import './Bio.css';

class Bio extends Component {
  constructor() {
    super();

    this.state = { scrolled: false };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { scrollHeight, scrollTop } = event.srcElement.body;
    const { pageYOffset, innerHeight } = window;
    const heightToShow = innerHeight - 100;

    if (pageYOffset > heightToShow) this.setState({ scrolled: true });
    if (pageYOffset < heightToShow) this.setState({ scrolled: false });
  }

  render() {
    const { scrolled } = this.state;
    return (
        <Element className={scrolled ? 'fixed' : ''} name="bio" id="bio">
          <div className="bio">
            <h2>Will Johnson</h2>
            { scrolled ? ''
            :
              <div className="subtext">
                <p>Analytics, Art, Data, Engineering</p>
                <p>Currently at <a href="https://mindmakersproject.org" target="_blank">Mind Makers</a>, formerly at <a href="https://www.segment.com" target="_blank">Segment</a></p>
              </div>
            }
            <ul>
              <li><Link activeClass="active" to="about" spy={true}>About</Link></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="https://www.twitter.com/wcj111" target="_blank">Github</a></li>
              <li><a href="#test" target="_blank">Medium</a></li>
              <li><a href="https://www.linkedin.com/in/wcj11" target="_blank">LinkedIn</a></li>
            </ul>
          </div>
        </Element>
    );
  }
}

export default Bio;
