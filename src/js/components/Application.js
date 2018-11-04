
// React
import React from 'react';
import LinkIconLibrary from './LinkIconLibrary';

// Image
import LogoImage from '../../favicon.svg';

class Application extends React.Component {
  render() {
    return (
      <div id="app">
        <header>
          <img alt="ayatec" src={LogoImage} />
          <span id="header-title">ayatec</span>
        </header>
        <main>
          main
          <LinkIconLibrary />
        </main>
        <footer>
          <span id="footer-text">powered by </span>
          <a href="/">ayatec</a>
        </footer>
      </div>
    );
  }
}

export default Application;
