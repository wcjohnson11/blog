import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import SiteNav from '../SiteNav';
import SiteLinks from '../SiteLinks';
import './style.css';
import profilePic from '../../pages/Link.png';
import flipBPic from '../../pages/lines.jpeg';

class SiteSidebar extends React.Component {
  render() {
    const { location } = this.props;
    const isHome = location.pathname === prefixLink('/');

    /* eslint-disable jsx-a11y/img-redundant-alt*/
    const header = (
      <header>
        <Link style={{ textDecoration: 'none', borderBottom: 'none', outline: 'none' }} to={prefixLink('/')}>
          <div className="flip-container">
            <div className="flipper">
              <div className="front">
                <img
                  src={profilePic}
                  alt="Profile picture of the author"
                />
              </div>
              <div className="back">
                <img
                  src={flipBPic}
                  alt="Profile picture of the author"
                />
              </div>
            </div>
          </div>
        </Link>
        { isHome ? (
          <h1><Link style={{ textDecoration: 'none', borderBottom: 'none', color: 'inherit' }} to={prefixLink('/')}> {config.siteAuthor}</Link></h1>
        ) :
          <h2><Link style={{ textDecoration: 'none', borderBottom: 'none', color: 'inherit' }} to={prefixLink('/')}> {config.siteAuthor}</Link></h2> }
        <p>
          {config.siteDescr}
        </p>
      </header>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt*/

    return (
      <div className="sidebar">
        <div className="sidebar-inner">
          <div className="blog-details">
            <header>
              {header}
            </header>
          </div>
          <div className="blog-options">
            <SiteNav {...this.props} />
            <footer>
              <SiteLinks {...this.props} />
              <p className="copyright">
                &copy; All rights reserved.
              </p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

SiteSidebar.propTypes = {
  location: React.PropTypes.object,
};

export default SiteSidebar;

