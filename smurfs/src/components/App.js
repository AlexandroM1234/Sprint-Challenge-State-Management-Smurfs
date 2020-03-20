import React, { useState, useEffect } from "react";
import "./App.css";
import SmurfsForm from "./SmurfsForm";
import SmurfsList from "./SmurfsList";
import { SmurfContext } from "../context/smurfContext";
import axios from "axios";

const App = () => {
  const [smurfData, setSmurfData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log(response.data);
        setSmurfData(response.data);
      })
      .catch(error => console.log("u messed up", error));
  }, []);

  const addSmurf = smurf => {
    setSmurfData([...smurfData, smurf]);
  };

  return (
    <div className="App">
      <h1>Smurfs with context api</h1>
      <SmurfContext.Provider value={{ setSmurfData, smurfData, addSmurf }}>
        <SmurfsForm />
        <SmurfsList />
      </SmurfContext.Provider>
    </div>
  );
};

export default App;
