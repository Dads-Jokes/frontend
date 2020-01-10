import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute.js";
import "./App.css";

import Dashboard from "./components/Dashboard";
import Login from "./components/login/Login";
import Register from "./components/login/Register";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </header>
    </div>
  );
}

export default App;
