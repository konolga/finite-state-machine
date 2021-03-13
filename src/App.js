import React from "react";
import { User } from "./user/User";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">Finite state machine App</header>
      <div className="details-container">
        <User></User>
      </div>
    </div>
  );
}

export default App;
