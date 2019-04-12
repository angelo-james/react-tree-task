import React, { Component } from 'react';

class FirstBranch extends Component {
  render() {
    let { name, children } = this.props;

    return (
      <h1>
        {name}
      </h1>
    );
  }
}

export default FirstBranch;