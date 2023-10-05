import React from "react"
import { Routes, Route } from "react-router-dom"
import { Homepage } from "../pages/home"
import { BuyerSignupPage } from "../pages/buyer/signup"
import { GuestLayout } from "../components/layouts/Guest"


function Router() {
    return (
        <Routes>
            <Route path="/" element={ <Homepage /> } />
            <Route path="/signup" element={ <GuestLayout><BuyerSignupPage /></GuestLayout> } />
        </Routes>
    )
}

export default Router