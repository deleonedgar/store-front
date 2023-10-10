import { 
  Routes, 
  Route } from "react-router-dom"
import { BuyerSignupPage } from "../pages/buyer/signup"
import { AuthenticationLayout } from "@/components/Layouts/authentication"
import { BuyerLoginPage } from "@/pages/buyer/login"
import { Homepage } from "@/pages/Home"
import { BuyerResetPage } from "@/pages/buyer/reset"
import { BuyerNewPasswordPage } from "@/pages/buyer/reset/new"


const Router = () => {

  return (
    <Routes>
      <Route path="/" element={ <Homepage /> } />
      <Route path="/buyer/signup" element={ <AuthenticationLayout><BuyerSignupPage /></AuthenticationLayout> } />
      <Route path="/buyer/login" element={ <AuthenticationLayout><BuyerLoginPage /></AuthenticationLayout> } />
      <Route path="/buyer/reset" element={ <AuthenticationLayout><BuyerResetPage /></AuthenticationLayout> } />
      <Route path="/buyer/reset/new" element={ <AuthenticationLayout><BuyerNewPasswordPage /></AuthenticationLayout> } />
    </Routes>
  )
}

export default Router