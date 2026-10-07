import React from "react";

const Toggle = ({ toggle, setToggle }) => {
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Show All Movies" : "Show Watchlist Only"}
      </button>
      <h4>{toggle ? "The Movies in the Watchlist" : "The Movie List"}</h4>
    </div>
  );
};

export default Toggle;
