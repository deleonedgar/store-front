import React from "react"
import { 
  Routes, 
  Route } from "react-router-dom"
import { Homepage } from "../pages/home"
import { BuyerSignupPage } from "../pages/buyer/signup"
import { AuthenticationLayout } from "../components/layouts/authentication"  


const Router = () => {

  return (
    <Routes>
      <Route path="/" element={ <Homepage /> } />
      <Route path="/buyer/signup" element={ <AuthenticationLayout><BuyerSignupPage /></AuthenticationLayout> } />
    </Routes>
  )
}

export default Router