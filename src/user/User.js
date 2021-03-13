import React from "react";
import Loader from "react-loader-spinner";
import "./User.scss";
import Machine from "../lib/FiniteStateMachine/FiniteStateMachine";

const getData = () => {
  return Machine("http://localhost:3000/users");
};

export const User = () => {
  const { loading, error, results } = getData();
  return loading ? (
    <Loader
      className="loader"
      type="Circles"
      color="#8bacbd"
      height={80}
      width={80}
    ></Loader>
  ) : !error && results != null ? (
    results.map((result, index) => <UserDetails data={result} key={index} />)
  ) : (
    <h3 className="error"> {"User not found"} </h3>
  );
};

export const UserDetails = ({
  data: { first_name, last_name, email, gender },
}) => {
  return (
    <div className="details">
      <div className="row title">
        {first_name} {last_name}
      </div>
      <div className="row email">{email}</div>
      <div className="row gender">{gender}</div>
    </div>
  );
};
