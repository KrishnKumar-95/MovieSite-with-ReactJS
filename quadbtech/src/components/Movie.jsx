import React from "react";
import { Link} from "react-router-dom";

const Movie = (props) => {

  const genre = props.genre.map((e) => {return (<span style={{ margin: "2px" }}key={e}>{e}</span>)})

  return (
    <>
      <div style={movieBoxStyle}>
        <div>
          <img style={movieBannerStyle} src={props.img} alt="medium" />
        </div>
        <div style={textStyle}>
          <h1>{props.name}</h1>
          <p style={{ marginBottom: "2px" }}>language : {props.lang}</p>
          <div style={{ display: "flex" }}>
            <p style={{ margin: "2px" }}>genres : </p>
            {genre}
          </div>
          <p style={{ margin: "2px" }}>rating : {props.rating}</p>
          <p style={{ margin: "2px" }}>summary : {props.summry}</p>
          <button style={buttonStyle}>
            <Link
              to="/moviedetails"
              style={{ color: "white", textDecoration: "none" }}
              state={{  
                img: props.imglrg,
                summry: props.summry,
                name: props.name,
                rating: props.rating,
                genre: props.genre,
                lang: props.lang,
                time: props.time,
                day: props.day

              }}
            >
              Watch
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

// Style
const movieBoxStyle = {
  padding: "7px",
  margin: "10px",
  border: "2px solid black",
  borderRadius: "20px",
  background: "#181a19",
  display: "flex",
};

const movieBannerStyle = {
  borderRadius: "20px",
  marginRight: "100px",
};

const buttonStyle = {
  color: "white",
  background: "red",
  fontWeight: "bold",
  fontSize: "17px",
  margin: "20px 5px",
  border: "none",
  cursor: "pointer",
};

const textStyle = {
  color: "white",
};

export default Movie;
