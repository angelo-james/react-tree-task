import React, { Component } from 'react';
import SecondBranch from './SecondBranch';

class FirstBranch extends Component {
  render() {
    let { name, children, expanded } = this.props;

    return (
      <div>
        <button>
          {name}
        </button>
        {expanded ? children.map(node => (
          <SecondBranch 
            key={node.id}
            name={node.name}
            children={node.children}
          />
        )) : null}
      </div>
    );
  }
}

export default FirstBranch;