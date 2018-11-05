
// React
import React from 'react';
import styled from 'styled-components';

const LinkIcon = ({ link, name, image }) => {
  return (
    <Style>
      <Link href={link}>
        <Image src={image} alt={name} />
        <Text>{name}</Text>
      </Link>
    </Style>
  );
};

const Style = styled.div`
  margin: 1rem;
  width: 106.5px;
  padding: 1rem;
  border-bottom: .5rem solid transparent;
  text-align: center;

  transition: all .2s 0s ease;
  &:hover {
    -webkit-transform: scale(1.05);
    border-bottom: .5rem solid #1e3c78;
  }

  @media only screen and (max-width: 545px) {
    width: 36%;
    margin: 1rem 3.5%;
    padding: 1rem 3.5%;
  }
`;

const Link = styled.a`
  text-decoration: none;
  &:link, &:visited {
    color: #1e3c78;
  }
`;

const Image = styled.img`
  width: 106.5px;
  box-sizing: border-box;
  overflow: hidden;

  transition: all .2s 0s ease;
  &:hover {
    -webkit-transform: scale(1.1);
  }
`;

const Text = styled.div`
  margin-top: .25rem;
  transition: all .2s 0s ease;
  &:hover {
    color: #F7F9FD;
    text-shadow: 1px 0 0 #1e3c78, -1px 0 0 #1e3c78, 0 2px 0 #1e3c78, 0 -1px 0 #1e3c78;
  }
`;

export default LinkIcon;
