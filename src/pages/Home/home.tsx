import { Link } from "react-router-dom";
import './style.scss'


function Home() {
    return (
        <div className=" ">
            <h1 className="">Home Page</h1>
            <div>
                <Link to="/buyer/signup">Click to view our buyer signup page</Link>
            </div>
            <div>
                <Link to="/buyer/Login">Click to view our buyer login page</Link>
            </div>
        </div>
    );
}
  
export default Home;