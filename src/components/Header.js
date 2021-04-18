import React from "react";

function Header({ showform, toggle }) {
  return (
    <div className="header">
      <h1>ASuCoT</h1>
      <h3>Student Exeat Form</h3>
	  <button
        style={{ background: `${toggle ? "crimson" : "green"}`, border: "black"}}
        onClick={showform}
      >
        {toggle ? "CLOSE" : "SIGN EXEAT"}
      </button>
    </div>
  );
}

export default Header;
