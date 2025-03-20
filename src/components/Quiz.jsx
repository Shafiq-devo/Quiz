    import { useState } from "react"
    import Questions from '../Question'
import Question from "../Question";
    function Quiz(){
    const [useranswer,setuseranswer]=useState([])
    const activequestion=useranswer.length;

        return <div id="questions">
    <h2 >{Questions[activequestion].text}</h2>
    <ul id="answers"  >
        {/* {Questions[activequestion].answers.map((answer)=>(
            <li className="answer" >
                <button>{answer}</button>
            </li>
        ))} */}



        {Question[activequestion].answers.map((answer)=>(
<li className="answer">
    <button>{answer}</button>
</li>
        ))}
    </ul>
        </div>

    }

    export default Quiz