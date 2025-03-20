import { useState } from "react";
import Questions from "../Question"; 
import quizimg from '../assets/quiz-complete.png'
import Question from "../Question";
function Quiz() {
  const [useranswer, setuseranswer] = useState([]);
  const activequestion = useranswer.length;
  // SHUFLLIN THE ANSWERS 


// CHECKING IF ALL THE QUESTIONS ARE FINISHED
const quiziscomplete=activequestion===Question.length;



if(quiziscomplete){
  return <div id="summary" >
    <img src={quizimg} alt="" />
    <h1>Quiz is completed</h1>
  </div>
}
const shuffled=[...Questions[activequestion].answers];
shuffled.sort(()=>Math.random()-0.5)


function handleclick(selectedanswer){
  setuseranswer((prev)=>{
return [...prev,selectedanswer]
  })
}

  return (
    <div id="questions">
      <h2>{Questions[activequestion].text}</h2>
      <ul id="answers">
        {/* {Questions[activequestion].answers.map((answer, index) => ( */}
{/* // USING SHUFFLED ANSWERS HERE */}
{shuffled.map((answer, index) => (

          <li key={index} className="answer">
            <button onClick={()=>handleclick(answer)} >{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz;
