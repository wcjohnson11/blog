import React, { Component } from 'react';
import './Bio.css';

class Bio extends Component {
  render() {
    return (
        <div className="bio">
          <h2>Will Johnson</h2>
          <p>Analytics, Art, Data, Engineering</p>
          <p>Currently at <a href="https://mindmakersproject.org" target="_blank">Mind Makers</a>, formerly at <a href="https://www.segment.com" target="_blank">Segment</a></p>
          <ul>
            <li><a href="https://github.com/wcjohnson11" target="blank"><i className="fa fa-github-alt"></i></a></li>
            <li><a href="https://twitter.com/wcj111" target="blank"><i className="fa fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/in/wcj11" target="blank"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
    );
  }
}

export default Bio;
