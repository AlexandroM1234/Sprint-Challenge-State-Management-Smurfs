import React, { useState, useEffect } from "react";
import axios from "axios";

const SmurfsForm = () => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChange = e => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    });
  };

  const axiosCall = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .catch(err => console.log("you messed up the post request", err));
  };

  const handleSubmit = () => {
    axios.post("http://localhost:3333/smurfs", newSmurf).then(response => {
      console.log(response);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Smurf Name</label>
        <input name="name" onChange={handleChange} />

        <label>Age</label>
        <input name="age" onChange={handleChange} />

        <label>Height in cm</label>
        <input name="height" onChange={handleChange} />

        <button>Submit New Smurf</button>
      </form>
    </div>
  );
};

export default SmurfsForm;
