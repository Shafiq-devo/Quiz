import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function First() {
  const [isdark, setisdark] = useState(() => {
    return JSON.parse(localStorage.getItem("darkmode")) || false;
  });

  useEffect(() => {
    if (isdark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isdark]);

  const toggleDarkMode = () => {
    setisdark((prev) => !prev);
    localStorage.setItem("darkmode", JSON.stringify(!isdark));
  };

  return (
    <>
      <p>Welcome to GitHub</p>
      <button id="linkbutton" onClick={toggleDarkMode}>
        {isdark ? "Light Mode" : "Dark Mode"}
      </button>
      <Link to={"/header"}>
        <button  id="linkbutton">Header</button>
      </Link>
    </>
  );
}

export default First;
