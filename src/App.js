import React from "react";
import CreateJokeForm from "./components/CreateJokeForm";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login/Login"
import Register from "./components/login/Register"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <Login /> */}
          {/* <Register /> */}
          <Route path="/register" exact compopnent={Register} />
          <Route path="/login" exact component={Login} />

          {/* <CreateJokeForm /> */}
        </header>
      </div>

    </Router>

  );
}

export default App;
