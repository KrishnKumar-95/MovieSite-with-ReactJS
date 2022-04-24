import axios from "../api/axios";
import React, { useEffect, useState } from "react";

const DataContext = React.createContext({
  data: null,
});

export const DataContextProvider = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      axios
        .get()
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, [setData]);

  return (
    <DataContext.Provider
      value={{
        data: data,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
