
// React
import React from 'react';
import styled from 'styled-components';

// App
import LinkIcon from './LinkIcon';

// Image
import AyatecImage from '../../images/ayatec.svg';
import ClipwebImage from '../../images/clipweb.png';
import GithubImage from '../../images/github.png';

class LinkIconLibrary extends React.Component {
  render() {
    return (
      <Style>
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
          name="GitHub"
          image={GithubImage}
        />
      </Style>
    );
  }
}

const Style = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default LinkIconLibrary;
