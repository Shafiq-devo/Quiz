import logoImg from '../assets/quiz-logo.png'
import { Link } from 'react-router-dom'
function Header(){
    return <header>
    <img src={logoImg} />
    <p>React Quiz</p>
    <Link to={'/quiz'} >
    <button>Quiz</button></Link>
    </header>

}
export default Header