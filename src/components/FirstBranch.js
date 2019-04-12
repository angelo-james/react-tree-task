import React, { Component } from 'react';
import SecondBranch from './SecondBranch';

class FirstBranch extends Component {
  render() {
    let { name, children } = this.props;

    return (
      <div>
        <h1>
          {name}
        </h1>
        {children.map(node => (
          <SecondBranch 
            name={node.name}
            children={node.children}
          />
        ))}
      </div>
    );
  }
}

export default FirstBranch;