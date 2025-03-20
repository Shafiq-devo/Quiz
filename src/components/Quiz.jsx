import { useState } from "react";
import Questions from "../Question"; 

function Quiz() {
  const [useranswer, setuseranswer] = useState([]);
  const activequestion = useranswer.length;

function handleclick(selectedanswer){
  setuseranswer((prev)=>{
return [...prev,selectedanswer]
  })
}

  return (
    <div id="questions">
      <h2>{Questions[activequestion].text}</h2>
      <ul id="answers">
        {Questions[activequestion].answers.map((answer, index) => (
          <li key={index} className="answer">
            <button onClick={()=>handleclick(answer)} >{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz;
