import React from "react";

const SmurfsForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input name="smurfName" />

        <label>height</label>
        <input name="height" />

        <label>Age</label>
        <input name="age" />

        <button>submit new Smurf</button>
      </form>
    </div>
  );
};

export default SmurfsForm;
