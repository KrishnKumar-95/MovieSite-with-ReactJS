import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const backButton = () => {
    navigate(-1);
  };
  return (
    <div style={navStyle}>
      <h2 style={navHeading}>My Movies</h2>
      <button style={buttonStyle} onClick={backButton}>Back</button>
    </div>
  );
};

const buttonStyle = {
  width:"50px"
}

const navStyle = {
  height: "10vh",
  width: "92.7vw",
  backgroundColor: "#181a19",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  position: "sticky",
  top: "0px",
  padding:"0 50px",
  zIndex:"30"
};

const navHeading = {
  color: "white",
  margin: "0",
};

export default Navbar;
