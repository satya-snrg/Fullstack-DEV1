import { Link } from "react-router-dom";
export default function Nav(){
    return(
        (<div className="navbar">
       <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        
      </div>
        )
    );
}