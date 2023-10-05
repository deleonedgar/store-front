import React from 'react'
import { Link } from "react-router-dom";
import './style.scss'


function Home() {
    return (
        <div className=" ">
            <h1 className="">Home Page</h1>
            <Link to="/signup">Click to view our sinup page</Link>
        </div>
    );
}
  
export default Home;