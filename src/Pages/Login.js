import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState({
    Username: "",
    Password: "",
  });
  const [user, setUser] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  // const loginstore = localStorage.getItem('user')
  const nav = useNavigate();

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("userSignUp")) || [];
    setUser(store);
  }, []);

  const handleLogin = () => {
    // (localStorage.getItem("userSignUp")
    // ).map((match) => {
    //   localStorage.getItem("user")
    const match = user.find(
      (lmatch) =>
        lmatch.Username === login.Username && lmatch.Password === login.Password
    );
    console.log(match, "match27");
    console.log(user, "user28");
    console.log(login, "login29");
    if (match && login.Username !== "" && login.Password !== "") {
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("login", JSON.stringify(login));
      setIsLogin(true);
      console.log(isLogin, "isLogin33");
      alert("Success");
      nav("/");
      window.location.reload();
    } else {
      localStorage.setItem("isLogin", "false");
      setIsLogin(false);
      console.log(isLogin, "isLogin38");
      alert("Unsuccessful");
    }

    // console.log(login, "1818");
    // const newData = [...user, login];
    // localStorage.setItem("user", JSON.stringify(newData));
    // setLogin(newData);
    // setLogin({
    //   Username: "",
    //   Password: "",
    // });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label>Username </label>
        <input
          type="text"
          name="Username"
          placeholder="Username"
          value={login.Username}
          onChange={handleLoginChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Password </label>
        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={login.Password}
          onChange={handleLoginChange}
          required
        />
      </div>
      <div>
        New User? <a href="/SignUp">SignUp</a>
      </div>
      <button className="submit-button" type="submit" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
