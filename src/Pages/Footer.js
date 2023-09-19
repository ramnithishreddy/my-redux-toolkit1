import React from "react";
// import {Link} from 'react-router-dom'
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <div>
      <footer>
        <Typography variant="body2" color="text.secondary">
          {"Copyright © "}         
          <span color="inherit" href="">
            TODO
          </span>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </footer>
    </div>
  );
}
