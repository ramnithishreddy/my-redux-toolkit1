import "./App.css";
import Todo from "./Todo/Todo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Pages/Nav";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Container from "@mui/material/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import Signup from "./Pages/Signup";
import ContactList from "./Pages/ContactList";

function App() {
  const isLogin = localStorage.getItem("isLogin");
  const login = JSON.parse(localStorage.getItem("login")) || [];
  const match1 = login.Username === "admin" && login.Password === "admin"
  console.log(match1,'App1919')
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          {isLogin ? (
            <>
              <Route path="Logout" element={<Logout />} />
              <Route path="Todo" element={<Todo />} />
              <Route path="Contact" element={<Contact />} />
            </>
          ) : null}
          {isLogin && match1 ? (
            <>
              <Route path="ContactList" element={<ContactList />} />
            </>
          ) : null}
        </Routes>
        <Container maxWidth="sm">
          <Footer />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
