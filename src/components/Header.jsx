import { useState, useEffect } from "react";
import logoImg from "../assets/quiz-logo.png";
import { Link } from "react-router-dom";

function Header() {
  // Read dark mode state from localStorage or default to false
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
    <header>
      <img src={logoImg} />
      <p>React Quiz</p>
      <Link to={"/quiz"}>
        <button  id="linkbutton">Quiz</button>
      </Link>
      <button  id="linkbutton" onClick={toggleDarkMode}>
        {isdark ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
