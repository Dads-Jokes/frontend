import React from "react";
import CreateJokeForm from "./components/CreateJokeForm";
import Dashboard from "./components/Dashboard";
import Register from "./components/login/Register";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
