import React, { Component } from 'react';
import * as d3 from 'd3';
import textures from 'textures';

class UnknownPleasures extends Component {
  componentDidMount() {
    var svg = d3.select('.unknown-pleasures')
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
      <div className="unknown-pleasures">
      <h1>hey</h1>
      </div>
    );
  }
}

export default UnknownPleasures;
