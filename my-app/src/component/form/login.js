import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [userName, setUserName] = useState({});
  const navigate = useNavigate();

  const onChange = (e) => {
    setUserName({ ...userName, [e.target.name]: e.target.value });
    console.log(userName);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
    console.log(userName);
  };

  return (
    <form onSubmit={onSubmit}>
      <p>email</p>
      <input
        type="email"
        placeholder="enter email"
        name="email"
        value={userName.email}
        onChange={onChange}
      ></input>
      <p> password </p>
      <input
        type="password"
        placeholder=" enter password"
        name="password"
        value={userName.password}
        onChange={onChange}
      ></input>
      <br />
      <button type="submit">submit</button>
    </form>
  );
}
export default Login;
