
// React
import React from 'react';

class Application extends React.Component {
  render() {
    return (
      <div id="app">
        <header>
          <img alt="ayatec" src={require('../../favicon.svg')} />
          <span id="header-title">ayatec</span>
        </header>
        <main>
          main
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
