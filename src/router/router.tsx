import { 
  Routes, 
  Route } from "react-router-dom"
import { Homepage } from "../pages/home"
import { BuyerSignupPage } from "../pages/buyer/signup"
import { AuthenticationLayout } from "@/components/Layouts/authentication"
import { BuyerLoginPage } from "@/pages/buyer/login"


const Router = () => {

  return (
    <Routes>
      <Route path="/" element={ <Homepage /> } />
      <Route path="/buyer/signup" element={ <AuthenticationLayout><BuyerSignupPage /></AuthenticationLayout> } />
      <Route path="/buyer/login" element={ <AuthenticationLayout><BuyerLoginPage /></AuthenticationLayout> } />
    </Routes>
  )
}

export default Router