import React from 'react';
import s from './FiniteStateMachine.scss';

class FiniteStateMachine extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: s.root
    }, this.props.children);
  }

}

export default FiniteStateMachine;