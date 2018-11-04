
// React
import React from 'react';
import LinkIcon from './LinkIcon';

// Image
import AyatecImage from '../../images/ayatec.svg';
import ClipwebImage from '../../images/clipweb.png';
import GithubImage from '../../images/github.png';

class LinkIconLibrary extends React.Component {
  render() {
    return (
      <div id="link-icon-library">
        <LinkIcon
          link="/"
          name="ayatec"
          image={AyatecImage}
        />
        <LinkIcon
          link="https://clipweb.ayatec.jp"
          name="clipweb"
          image={ClipwebImage}
        />
        <LinkIcon
          link="https://github.com/ayatec"
          name="github"
          image={GithubImage}
        />
      </div>
    );
  }
}

export default LinkIconLibrary;
