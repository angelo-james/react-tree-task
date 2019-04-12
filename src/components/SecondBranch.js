import React, { Component } from 'react';
import ThirdBranch from './ThirdBranch';

class SecondBranch extends Component {
  render() {
    let {name, children} = this.props;

    return (
      <div>
        <h2 className="card-header">
          {name}
        </h2>
        {children.map(node => (
          <ThirdBranch key={node.id}>
            {node.name}
          </ThirdBranch>
        ))}
      </div>
    );
  }
}

export default SecondBranch;