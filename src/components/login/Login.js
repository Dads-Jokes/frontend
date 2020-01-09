import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {

  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const changeHandler = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(``, loginData)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        setLoginData({
          username: "",
          password: ""
        });
        props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>Welcome to Dad Jokes!</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          onChange={changeHandler}
          value={loginData.username}
        />
        <input
          type="password"
          name="password"
          onChange={changeHandler}
          value={loginData.password}
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;