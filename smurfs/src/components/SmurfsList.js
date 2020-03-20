import React from "react";
import axios from "axios";

const SmurfsList = () => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      console.log(response.data);
    })
    .catch(err => console.log("you messed up", err));
  return (
    <div>
      <p>wow</p>
    </div>
  );
};

export default SmurfsList;
