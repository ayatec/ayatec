
// React
import React from 'react';

class LinkIcon extends React.Component {
  render() {
    return (
      <div>
        <a href={this.props.link}>
          <div>
            <img src={this.props.image} alt={this.props.name} />
          </div>
          <div>
            <div>{this.props.name}</div>
          </div>
        </a>
      </div>
    );
  }
}

export default LinkIcon;
