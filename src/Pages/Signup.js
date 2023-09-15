import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [signup, setSignUp] = useState({
    Name: "",
    Username: "",
    Email: "",
    Password: "",
  });
  const [userSignUp, setUserSignUp] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    const store = localStorage.getItem("userSignUp");
    if (store) {
      setUserSignUp(JSON.parse(store));
    }
  }, []);
  const handleSignUp = () => {
    if (
      signup.Name !== "" &&
      signup.Username !== "" &&
      signup.Email !== "" &&
      signup.Password !== ""
    ) {
      const newSignUpData = [...userSignUp, signup];
      localStorage.setItem("userSignUp", JSON.stringify(newSignUpData));
      setSignUp(newSignUpData);
      nav("/Login");
      setSignUp({
        Name: "",
        Username: "",
        Email: "",
        Password: "",
      });
    } else {
      alert("please fill up the fields");
    }
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUp({
      ...signup,
      [name]: value,
    });
  };
  return (
    <div className="login-container">
      <h2>SignUp</h2>
      <div className="form-group">
        <label>Name </label>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          value={signup.Name}
          onChange={handleSignUpChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Username </label>
        <input
          type="text"
          name="Username"
          placeholder="Username"
          value={signup.Username}
          onChange={handleSignUpChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email </label>
        <input
          type="email"
          name="Email"
          placeholder="Email"
          value={signup.Email}
          onChange={handleSignUpChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Password </label>
        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={signup.Password}
          onChange={handleSignUpChange}
          required
        />
      </div>
      <button className="submit-button" type="submit" onClick={handleSignUp}>
        SignUp
      </button>
    </div>
  );
}
