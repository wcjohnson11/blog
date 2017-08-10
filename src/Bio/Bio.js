import React, { Component } from 'react';
import { Element, Link, scroll } from 'react-scroll';
import './Bio.css';
import './../../public/styles/font-awesome.css';

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
            <h2 onClick={()=>scroll.scrollToTop()}>Will Johnson</h2>
            { scrolled ? ''
            :
              <div className="subtext">
                <p>Analytics, Art, Data, Engineering</p>
                <p>Currently at <a href="https://mindmakersproject.org" target="_blank">Mind Makers</a>, formerly at <a href="https://www.segment.com" target="_blank">Segment</a></p>
              </div>
            }
            <ul>
              <li><Link activeClass="active" to="about" smooth={true} duration={500} offset={-120}>About</Link></li>
              <li><a href="https://medium.com/@wcj111" target="_blank"><i className="fa fa-medium " /></a></li>
              <li><a href="https://github.com/wcjohnson11/" target="_blank"><i className="fa fa-github " /></a></li>
              <li><a href="https://www.linkedin.com/in/wcj11" target="_blank"><i className="fa fa-linkedin " /></a></li>
              <li><Link activeClass="active" to="projects" smooth={true} duration={500} offset={-120}>Projects</Link></li>
            </ul>
          </div>
        </Element>
    );
  }
}

export default Bio;
