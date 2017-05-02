import React from 'react';
import { config } from 'config';
import './style.css';
import '../../static/fonts/fontawesome/style.css';

class SiteLinks extends React.Component {
  render() {
    return (
      <div className="blog-links">
        <ul>
          {config.siteGithubUrl && (
            <li>
              <a target="_blank" href={config.siteGithubUrl}>
                <i className="fa fa-github-alt" />
              </a>
            </li>
          )}
          {config.siteLinkedInUrl && (
            <li>
              <a target="_blank" href={config.siteLinkedInUrl}>
                <i className="fa fa-linkedin" />
              </a>
            </li>
          )}
        </ul>
        <ul>
          {config.siteTwitterUrl && (
            <li>
              <a target="_blank" href={config.siteTwitterUrl}>
                <i className="fa fa-twitter" />
              </a>
            </li>
          )}
          {config.siteEmailUrl && (
            <li>
              <a target="_blank" href={`mailto:${config.siteEmailUrl}`}>
                <i className="fa fa-envelope" />
              </a>
            </li>
          )}
        </ul>
        <ul>
          {config.siteRssUrl && (
            <li>
              <a target="_blank" href={config.siteRssUrl}><i className="fa fa-rss" /></a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default SiteLinks;
