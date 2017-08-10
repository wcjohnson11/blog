import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './Project.css';

class Project extends Component {
  render() {
    const { description, github, medium, src, title } = this.props.metadata;
    return (
        <div className="project">
          <div className="project-image">
            <img src={src} alt={title}/>
          </div>
          <div className="project-text">
            <h3>{title}</h3>
            <ReactMarkdown source={description}/>
            <div className="icons">
              { github && <a href={github} target="_blank">Code on Github <i className="fa fa-github" /></a> }
              { medium && <a href={medium} target="_blank">Post on Medium <i className="fa fa-medium" /></a> }
            </div>
          </div>
        </div>
    );
  }
}

export default Project;
