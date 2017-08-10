import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Project from './Project';
import projectData from './projectData.js';
import './Projects.css';

class Projects extends Component {
  render() {
    const projectDivs = projectData.map((proj)=> {
      return (<Project metadata={proj}  key={proj.title}/>);
    })
    return (
      <Element name="projects" id="projects">
      <div className="projects" id="projects">
        <h2>Projects</h2>
        {projectDivs}
      </div>
      </Element>
    );
  }
}

export default Projects;
