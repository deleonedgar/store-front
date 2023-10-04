import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import SignUp from "./SignUp"

function Router() {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/signup" element={ <SignUp /> } />
        </Routes>
    )
}

export default Router