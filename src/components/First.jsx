import { Link } from "react-router-dom";
import logoImg from "../assets/quiz-logo.png";
import darkmode from "./Darkmode";
function First() {
  console.log("Logo Image:", logoImg); // ✅ This is correctly placed

  return (
    <>
     <div     
           style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center", 
            height: "100vh", 
            flexDirection: "column", 
          }}
       >
              

     <img id="imagequiz" src={logoImg} />
     <p>Welcome to Quiz </p>

      <Link to={"/header"}>
        <button  id="linkbutton">Header</button>
      </Link>
     </div>
    </>
  );
}

export default First;
