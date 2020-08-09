import React, { useContext } from "react";
import { SmurfContext } from "../context/smurfContext";
import SmurfCard from "./SmurfCard";

const SmurfsList = () => {
  const { smurfData } = useContext(SmurfContext);
  return (
    <div>
      {smurfData.map(smurf => (
        <SmurfCard key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};

export default SmurfsList;
