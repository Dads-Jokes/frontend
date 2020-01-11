import React, { useState } from "react";
import axios from "axios";

const Register = (props) => {
  const [data, SetData] = useState({ username: "", password: "" });
  const [err, SetErr] = useState("");

  const handleChange = (e) => {
    SetData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    axios
      .post("https://the-joker-spa.herokuapp.com/api/auth/register", data)
      .then((res) => {
        SetErr("");
        SetData({ username: "", password: "" });
        props.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1>Welcome to Dad Jokes!</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="username"
          value={data.username}
          placeholder="Username"
          type="text"
        />
        <input
          onChange={handleChange}
          name="password"
          value={data.password}
          placeholder="Password"
          type="password"
        />
        <button type="submit">Register</button>
      </form>
      <br />
      <button
        type="button"
        onClick={() => {
          props.history.push("/login");
        }}
      >
        Already Have An Account? Log In!
      </button>
      <h3 style={{ color: "red" }}>{err && err}</h3>
    </div>
  );
};

// import useForm from "react-hook-form";

// const Register = () => {
//   const { register, handleSubmit, errors, getValues, reset } = useForm();

//   const onSubmit = (data) => {
//     reset();
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>
//         Username: <span></span>
//         <input
//           type="text"
//           name="username"
//           ref={register({
//             required: true
//           })}
//         />
//       </label>
//       <br />
//       {errors.username && errors.username.type === "required" && (
//         <p>This field is required!</p>
//       )}

//       <label>
//         Password: <span></span>
//         <input
//           type="password"
//           name="password"
//           ref={register({
//             required: true
//           })}
//         />
//       </label>
//       <br />
//       {errors.password && errors.password.type === "required" && (
//         <p>This field is required!</p>
//       )}

//       <label>
//         Re-type Password: <span></span>
//         <input
//           type="password"
//           name="retyped_password"
//           ref={register({
//             required: true,
//             validate: (value) => {
//               const data = getValues();
//               return value === data.password;
//             }
//           })}
//         />
//         {errors.retyped_password &&
//           errors.retyped_password.type === "required" && (
//             <p>This field is required!</p>
//           )}
//         {errors.retyped_password &&
//           errors.retyped_password.type === "validate" && (
//             <p>Passwords must match!</p>
//           )}
//       </label>
//       <br />

//       <input type="submit" value="Create Account" />
//     </form>
//   );
// };

export default Register;
