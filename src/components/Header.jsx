import logoImg from "../assets/quiz-logo.png";
import { Link } from "react-router-dom";
import "../index.css";

function Header() {
  return (
    <header>
x
     <img id="imagequiz" src={logoImg} alt="Quiz Logo" />

      <p>React Quiz</p>

      <Link to={"/quiz"}>
        <button id="linkbutton">Quiz</button>
      </Link>
    </header>
  );
}

export default Header;
