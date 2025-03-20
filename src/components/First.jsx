import { Link } from "react-router-dom"

function First(){
    return(
       <>
        <p>
        Welcome to github
    </p>
<Link to={'/header'} >
<button>Header</button></Link></>
    ) }

    export default First