import { Link } from "react-router-dom";
import './style.scss'
import { useAppSelector } from "@/store/hooks";
import { selectCustomerState } from "@/store/slices/customer";


function Home() {
    const { profile } = useAppSelector(selectCustomerState)
    
    return (
        <div className=" ">
            <h1 className="">Home Page</h1>
            { !!profile.emailOrPhone? (
                <>
                    Hello { profile.firstname } { profile.lastname }
                </>
            ) : <></> }
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