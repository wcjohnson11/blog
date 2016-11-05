import React, { Component } from 'react';
import * as d3 from 'd3';
import textures from 'textures';
import logo from './cutmypic.png';
import './Sidebar.css';

class Sidebar extends Component {
  componentDidMount() {
    var svg = d3.select('.Sidebar')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')

    var t = textures.paths()
      .d('waves')
      .lighter(.8)
      .thicker(.9);

    svg.call(t);

    svg.append("rect")
      .attr('width', '100%')
      .attr('height', '100%')
      .style("fill", t.url())
  }
  render() {
    return (
      <div className="Sidebar">
        <ul>
          <li><a href="/"><img src={logo} id="head-icon" alt="logo"/></a></li>
          <li><a href="/projects" className="project-icon"><i className="fa fa-code"></i></a></li>
          <li><a href="/blog"><i className="fa fa-pencil"></i></a></li>
          <li><a href="https://github.com/wcjohnson11" target="blank"><i className="fa fa-github-alt"></i></a></li>
          <li><a href="https://twitter.com/wcj111" target="blank"><i className="fa fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/in/wcj11" target="blank"><i className="fa fa-linkedin"></i></a></li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
