
// React
import React from 'react';
import styled from 'styled-components';

// App
import LinkIconLibrary from './LinkIconLibrary';

// Image
import LogoImage from '../../favicon.svg';

class Application extends React.Component {
  render() {
    return (
      <Style>
        <Header>
          <HeaderImg alt="ayatec" src={LogoImage} />
          <HeaderTitle>ayatec</HeaderTitle>
        </Header>
        <Main>
          <LinkIconLibrary />
        </Main>
        <Footer>
          <FooterText>powered by </FooterText>
          <FooterLink href="/">ayatec</FooterLink>
        </Footer>
      </Style>
    );
  }
}

// Style
const Style = styled.div`
  color: #1e3c78;
  font-weight: 900;
`;

const Header = styled.header`
  margin: 2rem;
  text-align: left;
`;

const HeaderImg = styled.img`
  width: 170.5px;
`;

const HeaderTitle = styled.span`
  display: none;
`;

const Main = styled.main`
  margin: 0 2rem;
  background: #fff;
  border-right: .05rem solid #1e3c78;
  border-left: .05rem solid #1e3c78;
`;

const Footer = styled.footer`
  margin: 2rem;
  text-align: right;
`;

const FooterText = styled.span`
`;

const FooterLink = styled.a`
  text-decoration: none;
  &:link, &:visited {
    color: #F7F9FD;
    text-shadow: 1px 0 0 #1e3c78, -1px 0 0 #1e3c78, 0 2px 0 #1e3c78, 0 -1px 0 #1e3c78;
  }

  transition: all .2s 0s ease;
  &:hover {
    color: #630B39;
    text-shadow: none;
  }
`;

export default Application;
