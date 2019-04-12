import React, { Component } from 'react';
import ThirdBranch from './ThirdBranch';

class SecondBranch extends Component {
  render() {
    let {name, children} = this.props;

    return (
      <div>
        <h2>
          {name}
        </h2>
        {children.map(node => (
          <ThirdBranch 
            name={node.name}
          />
        ))}
      </div>
    );
  }
}

export default SecondBranch;