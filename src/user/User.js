import React from "react";
import Machine from "FiniteStateMachine";
import Loader from "react-loader-spinner";
import "./User.scss";

const User = () => {
  const { loading, error, results } = Machine("http://localhost:3000/users");
  return loading ? (
    <Loader type="Circles" color="#00BFFF" height={80} width={80}></Loader>
  ) : error ? (
    <h3 className="error"> {"User not found"} </h3>
  ) : (
    results.map((result, index) => <UserDetails data={result} key={index}/>)
  );
};

const UserDetails = ({ data: { first_name, last_name, email, gender }}) => {
  return (
    <div className="details-container">
      <div className="row title">{first_name}{' '}{last_name}</div>
      <div className="row email">{email}</div>
      <div className="row gender">{gender}</div>
    </div>
  );
};

export default User;

//TODO:
// scss for UserDetails
// Tests for 3 cases
// working demo: maybe 3 buttons for 3 cases
// client-side mock server responses ?

// presentation
