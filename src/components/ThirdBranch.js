import React, { Component } from 'react';

class ThirdBranch extends Component {
  render() {
    let { name } = this.props;

    return (
      <p>
        {name}
      </p>
    );
  }
}

export default ThirdBranch;