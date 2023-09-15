import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    alert("Logout successful");
    nav("/");
    window.location.reload();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
