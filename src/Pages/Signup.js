import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function Signup() {
  const [signup, setSignUp] = useState({
    Name: "",
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [userSignUp, setUserSignUp] = useState([]);
  const [signupalert, setSignUpAlert] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const store = localStorage.getItem("userSignUp");
    if (store) {
      setUserSignUp(JSON.parse(store));
    }
  }, []);

  const isEmailValid = (email) => {
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailTest.test(email);
  };

  const isPasswordValid = (password) => {
    const passwordTest =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordTest.test(password);
  };

  const handleSignUp = () => {
    if (
      signup.Name.trim() !== "" &&
      signup.Username.trim() !== "" &&
      isEmailValid(signup.Email) &&
      isPasswordValid(signup.Password) &&
      signup.Password === signup.ConfirmPassword
    ) {
      setSignUpAlert(true);
      const newSignUpData = [...userSignUp, signup];
      localStorage.setItem("userSignUp", JSON.stringify(newSignUpData));
      console.log(signupalert, "5555");
      nav("/Login");
      setSignUp({
        Name: "",
        Username: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
      });
    } else {
      let errorMessage = "Please correct the following issues:\n";
      if (signup.Name.trim() === "") {
        errorMessage += "- Name is required.\n";
      }
      if (signup.Username.trim() === "") {
        errorMessage += "- Username is required.\n";
      }
      if (!isEmailValid(signup.Email)) {
        errorMessage += "- Please enter a valid email address.\n";
      }
      if (!isPasswordValid(signup.Password)) {
        errorMessage +=
          "- Password should be at least 8 characters with 1 number, " +
          "1 special character, and 1 uppercase letter.\n";
      }
      if (signup.Password !== signup.ConfirmPassword) {
        errorMessage += "- Passwords do not match.\n";
      }
      alert(errorMessage);
    }
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUp({
      ...signup,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   const Timeout = setTimeout(() => {
  //     setSignUpAlert(false);
  //   }, 1500);
  //   return () => clearTimeout(Timeout);
  // }, [signupalert]);

  return (
    <div className="login-container">
      <h2>SignUp</h2>
      <div className="form-group">
        <label>Name</label>
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
        <label>Username</label>
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
        <label>Email</label>
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
        <label>Password</label>
        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={signup.Password}
          onChange={handleSignUpChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          name="ConfirmPassword"
          placeholder="Confirm Password"
          value={signup.ConfirmPassword}
          onChange={handleSignUpChange}
          required
        />
      </div>
      <button className="submit-button" type="button" onClick={handleSignUp}>
        SignUp
      </button>
      {signupalert && (
        <div className="alert-container">
          <Stack sx={{ width: "50%" }} spacing={2} className="alert-container">
            <Alert severity="success">SignUped Successfully!</Alert>
          </Stack>
        </div>
      )}
    </div>
  );
}
