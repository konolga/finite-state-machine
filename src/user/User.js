import React from "react";
import { fetchStates } from "FiniteStateMachine";

class User extends React.Component {
  state = {};
  async componentDidMount() {
    const fetchedData = fetchStates();
    this.setState({ fetchedData });
  }

  render() {
    return this.state.loading ? (
      <div>"I am loading"</div>
    ) : this.state.error ? (
      <div>"I am error"</div>
    ) : (
      <div> {this.state.results}</div>
    );
  }
}

export default User;
