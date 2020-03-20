import React, { useContext } from "react";
import { SmurfContext } from "../context/smurfContext";

const SmurfsList = () => {
  const { smurfData } = useContext(SmurfContext);
  return (
    <div>
      {smurfData.map(smurf => (
        <>
          <p>{smurf.name}</p>
          <p>{smurf.age}</p>
          <p>{smurf.height}</p>
        </>
      ))}
    </div>
  );
};

export default SmurfsList;
