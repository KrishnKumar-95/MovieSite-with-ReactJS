import React, { useContext } from "react";
import DataContext from "../store/DataContext";
import Movie from "./Movie";

const Movies = () => {
  const context = useContext(DataContext);
  return (
    <>
      {context.data.map((e) => {
        return (
          <div key={e.show.id}>
            <Movie
              img={e.show.image.medium}
              name={e.show.name}
              lang={e.show.language}
              genre={e.show.genres}
              rating={e.show.rating.average}
              summry={e.show.summary}
              imglrg={e.show.image.original}
              time={e.show.schedule.time}
              day={e.show.schedule.days}
            />
          </div>
        );
      })}
    </>
  );
};

export default Movies;
