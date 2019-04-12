import React, { Component } from 'react';

class SecondBranch extends Component {
  render() {
    let {name, children} = this.props;

    return (
      <h2>
        {name}
      </h2>
    );
  }
}

export default SecondBranch;