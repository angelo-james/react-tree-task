import React, { Component } from 'react';
import SecondBranch from './SecondBranch';

class FirstBranch extends Component {
  render() {
    let { name, children, expanded, onExpand, id } = this.props;

    let handleToggle = (event) => {
      onExpand(event.target.value);
    }

    return (
      <div>
        <button value={id} onClick={event => handleToggle(event)}>
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