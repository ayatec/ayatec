
// React
import React from 'react';

const LinkIcon = ({ link, name, image }) => {
  return (
    <div>
      <a href={link}>
        <div>
          <img src={image} alt={name} />
        </div>
        <div>
          <div>{name}</div>
        </div>
      </a>
    </div>
  );
};

export default LinkIcon;
