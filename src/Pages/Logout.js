import React from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function Logout() {
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    // {updateSuccess && (
    <Stack className="alert-container" sx={{ width: "50%" }} spacing={2}>
      <Alert severity="success">Logouted Successfully!</Alert>
    </Stack>;
    // )}
    // alert("Logout successful");
    nav("/");
    window.location.reload();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
