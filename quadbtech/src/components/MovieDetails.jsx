import React from "react";
import { Link, useLocation } from "react-router-dom";

const MovieDetails = () => {
  const location = useLocation();

  return (
    <div style={movieBox}>
      <div style={movieBanner}>
        <img style={imageStyle} src={location.state.img} alt="Large-Img" />
      </div>
      <h1 style={textHeading}>{location.state.name}</h1>
      <p style={textHeading}>rating : {location.state.rating}</p>
      <p style={textHeading}>
        genre :{" "}
        {location.state.genre.map((e) => {
          return (
            <span style={{ margin: "2px" }} key={e}>
              {e}
            </span>
          );
        })}
      </p>
      <p style={textHeading}>language : {location.state.lang}</p>
      <p style={textSummry}>{location.state.summry}</p>
      <button style={buttonStyle}>
        <Link
          style={{ color: "white", textDecoration: "none", padding: "12.2px" }}
          to="/bookingform"
          state={{
            name: location.state.name,
            time: location.state.time,
            day: location.state.day,
          }}
        >
          Book Tickets
        </Link>
      </button>
    </div>
  );
};

// Style
const textHeading = {
  color: "white",
};
const textSummry = {
  color: "white",
  textAlign: "justify",
};

const movieBox = {
  padding: "20px",
  backgroundColor: "#343536",
};

const movieBanner = {
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imageStyle = {
  height: "40rem",
  borderRadius: "20px",
};

const buttonStyle = {
  height: "3rem",
  width: "9rem",
  borderRadius: "15px",
  backgroundColor: "red",
  fontWeight: "bold",
  fontSize: "17px",
  color: "white",
  border: "1px solid black",
};

export default MovieDetails;
