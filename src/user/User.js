import React from "react";
import Machine from "FiniteStateMachine";
import Loader from "react-loader-spinner";

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
      <h4>{first_name}</h4>
      <h4>{last_name}</h4>
      <h4>{email}</h4>
      <h4>{gender}</h4>
    </div>
  );
};

export default User;
