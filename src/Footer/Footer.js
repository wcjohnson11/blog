import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <section className="footer" id="footer">
        <p>Copyright © 2017 by Will Johnson. All rights reserved. <a target="_blank" href="mailto:williamcouperjohnson@gmail.com"><i className="fa fa-envelope" /></a> <a target="_blank" href="https://codepen.io/wcjohnson11/"><i className="fa fa-codepen" /></a></p>
      </section>
    );
  }
}

export default Footer;
