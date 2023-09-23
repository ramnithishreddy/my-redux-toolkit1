import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navbar() {
  const [userSignUp, setUserSignUp] = useState([]);
  const [login, setLogin] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("userSignUp")) || [];
    const store1 = JSON.parse(localStorage.getItem("login")) || {};

    setUserSignUp(store);
    setLogin(store1);

    const store2 = localStorage.getItem("isLogin");
    setIsLogin(store2 === "true");
  }, []);

  const match = userSignUp.find(
    (user) =>
      user.Username === login.Username && user.Password === login.Password
  );

  const match1 = login.Username === "admin" && login.Password === "admin";
  console.log(match, "Nav2929");
  console.log(match1, "Nav3030");
  console.log(login, "Nav3131");
  return (
    <div className="container">
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <HomeIcon fontSize="large" color="primary" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <>
          <ul className="navbar-nav">
            {isLogin ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="TODO">
                    TODO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Contact">
                    Contact
                  </Link>
                </li>
              </>
            ) : null}
            {isLogin && match1 ? (
              <div>
                <Nav>
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Admin List"
                    menuVariant="white"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/ContactList">
                      Contact List
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </div>
            ) : null}
            {!isLogin ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="Login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Signup">
                    SignUp
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
        </>
        <div className="profile">
          {isLogin && (match || match1) ? (
            <ul className="navdropdown">
              <li className="dropdown">
                <p>
                  {" "}
                  Hi,{" "}
                  <a href="/Profile" className="dropbtn">
                    {match ? match.Name : "Admin"}
                  </a>
                </p>
                <div className="dropdown-content">
                  <a href="/Logout" className="list1">
                    Logout
                  </a>
                  <a href="/Settings" className="list2">
                    Settings
                  </a>
                </div>
              </li>
            </ul>
          ) : null}
        </div>
      </nav>
    </div>
  );
}
