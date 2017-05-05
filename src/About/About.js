import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <h2>About</h2>
        <h3>current</h3>
        <p>Tech lead and software engineer for the <a href="https://mindmakersproject.org" target="_blank">MindMakers Project</a> web team and part of the visualization design and engineering team for our upcoming physical exhibits.</p>
        <h3>past</h3>
        <p>In a past life, I studied International Relations at Connecticut College with a focus on East Asia. I spent the first few years of my career researching emerging internet markets in China and then doing analysis and media buying in advertising.</p>
        <p>I discovered scripting and then programming and then data visualization and decided that I wanted to become more technical.</p>
        <p>I attended and taught at Hack Reactor in San Francisco before taking my first job in tech at [Segment](https://segment.com/). I started in a customer facing role, helping our largest enterprise customers understand how to get more out of their data, providing suggestions on analytics tools, data collection, structure, organization, visualization and SQL/Python based analysis. I later worked internally to help spread those principals internally at Segment, building what would become our Biz Ops and Analysis teams and maintaining and improving our ETL process in Node to improve the quality of dashboards and reports I'd built for our internal teams.</p>
        <p>During this time I attended [Codepath](https://codepath.com/) for their iOS bootcamp and was awarded runner-up at demo day for a meditation app that I'd built.</p>
        <p>After I'd helped hire people to run the biz ops and analysis teams, I joined the Segment integrations team and began to develop and maintain integrations and libraries that were the core of the Segment product.</p>
        <h3>extra</h3>
        <p></p>
      </section>
    );
  }
}

export default About;
