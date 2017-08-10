import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './About.css';

class About extends Component {
  render() {
    return (
      <Element name="about" id="about">
        <section className="about" id="about">
          <h2>About</h2>
          <h3>current</h3>
          <p>Software engineer and lead for the <a href="https://mindmakersproject.org" target="_blank">MindMakers Project</a> web team and part of the visualization design and engineering team for our upcoming physical exhibits. I am available for web, iOS, analytics and data pipeline projects.</p>
          <h3>past</h3>
          <p>In a past life, I studied International Relations at Connecticut College with a focus on East Asia. I spent the first few years of my career researching emerging internet markets in China and then doing analysis and media buying in advertising.</p>
          <p>I discovered scripting and then programming and then data visualization and decided that I wanted to become more technical.</p>
          <p>I attended and taught at <a href="https://www.hackreactor.com" target="_blank">Hack Reactor</a> in San Francisco before taking my first job in tech at <a href="https://segment.com" target="_blank">Segment</a>. I started in a customer facing role, helping our largest enterprise customers understand how to get more out of their data, providing suggestions on analytics tools, data collection, structure, organization, visualization and SQL/Python based analysis. I later worked internally to help spread those principals internally at Segment, building what would become our Biz Ops and Analysis teams and maintaining and improving our ETL process in Node to improve the quality of dashboards and reports I'd built for our internal teams.</p>
          <p>During this time I attended <a href="https://codepath.com" target="_blank">Codepath</a> for their iOS bootcamp and was awarded runner-up at demo day for a meditation app that I'd built.</p>
          <p>After I'd helped hire people to run the biz ops and analysis teams, I joined the Segment integrations team and began to develop and maintain integrations and libraries that were the core of the Segment product.</p>
          <h3>extra</h3>
          <p>I've spoken at the <a href="https://keen.io" target="_blank">Keen.io</a> meetup, Data Visualization Show and Tell about the process of creating a data visualization.</p>
        </section>
      </Element>
    );
  }
}

export default About;
