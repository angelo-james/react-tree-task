import React from 'react';

const ThirdBranch = props => {
  return (
    <ul className="animated fadeIn list-group list-group-flush">
      <li className="list-group-item">
        {props.children}
      </li>
    </ul>
  );
}

export default ThirdBranch;