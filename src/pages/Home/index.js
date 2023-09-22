import React from 'react'
import { Link } from "react-router-dom";
import './style.scss'

function Home() {
    return (
        <div>
            <h1>Home Page</h1>

            <Link to="/signup">Click to view our sinup page</Link>
        </div>
    );
}
  
export default Home;