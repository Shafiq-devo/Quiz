import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import darkmode from "./Darkmode";
function First() {
  return (
    <>
      <p>Welcome to Quiz </p>
      <Link to={"/header"}>
        <button  id="linkbutton">Header</button>
      </Link>
    </>
  );
}

export default First;
