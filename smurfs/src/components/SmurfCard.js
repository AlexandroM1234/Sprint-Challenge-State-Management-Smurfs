import React from "react";

const SmurfCard = props => {
  return (
    <div>
      <h2>Name: {props.smurf.name}</h2>
      <h3>Age: {props.smurf.age}</h3>
      <h4>Height: {props.smurf.age}</h4>
    </div>
  );
};

export default SmurfCard;
