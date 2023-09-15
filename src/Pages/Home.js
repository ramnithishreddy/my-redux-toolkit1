import React, { useEffect, useState } from "react";

export default function Home() {
  const [userSignUp, setUserSignUp] = useState([]);
  const [login, setLogin] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("userSignUp")) || [];
    const store1 = JSON.parse(localStorage.getItem("login")) || [];

    setUserSignUp(store);
    setLogin(store1);

    const store2 = localStorage.getItem("isLogin");
    setIsLogin(store2 === "true");
  }, []);

  const match = userSignUp.find(
    (user) =>
      user.Username === login.Username && user.Password === login.Password
  );
  console.log(match, "match23");

  return (
    <div className="home-container">
      {isLogin && match ? (
        <h2>Welcome to the Home Page {match.Name}</h2>
      ) : (
        <h2>Welcome SignUp to Start </h2>
      )}
      <p>This is the home page of our website.</p>
    </div>
  );
}
