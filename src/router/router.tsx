import { 
  Routes, 
  Route } from "react-router-dom"
import { BuyerSignupPage } from "../pages/buyer/signup"
import { AuthenticationLayout } from "@/components/Layouts/authentication"
import { BuyerLoginPage } from "@/pages/buyer/login"
import { Homepage } from "@/pages/Home"
import { BuyerResetPage } from "@/pages/buyer/reset"
import { BuyerNewPasswordPage } from "@/pages/buyer/reset/new"
import { BuyerAccountPage } from "@/pages/buyer/account"
import { BuyerAddressPage } from "@/pages/buyer/account/address"
import { BuyerEditAccountPage } from "@/pages/buyer/account/editaccount"
import { BuyerEmailAddress } from "@/pages/buyer/account/emailaddress"
import { BuyerChangePassword } from "@/pages/buyer/account/changepassword"
import { BuyerPasswordVerify } from "@/pages/buyer/account/passwordverify"
import { BuyerAddPayment } from "@/pages/buyer/account/addpayment"




const Router = () => {

  return (
    <Routes>
      <Route path="/" element={ <Homepage /> } />
      <Route path="/buyer/signup" element={ <AuthenticationLayout><BuyerSignupPage /></AuthenticationLayout> } />
      <Route path="/buyer/login" element={ <AuthenticationLayout><BuyerLoginPage /></AuthenticationLayout> } />
      <Route path="/buyer/reset" element={ <AuthenticationLayout><BuyerResetPage /></AuthenticationLayout> } />
      <Route path="/buyer/reset/new" element={ <AuthenticationLayout><BuyerNewPasswordPage /></AuthenticationLayout> } />
      <Route path="/buyer/account" element={ <AuthenticationLayout><BuyerAccountPage /></AuthenticationLayout> } />
      <Route path="/buyer/account/address" element={ <AuthenticationLayout><BuyerAddressPage /></AuthenticationLayout> } />
      <Route path="/buyer/account/editaccount" element={ <AuthenticationLayout><BuyerEditAccountPage /></AuthenticationLayout> } />
      <Route path="/buyer/account/emailaddress" element={ <AuthenticationLayout><BuyerEmailAddress /></AuthenticationLayout> } />
      <Route path="/buyer/account/changepassword" element={ <AuthenticationLayout><BuyerChangePassword /></AuthenticationLayout> } />
      <Route path="/buyer/account/passwordverify" element={ <AuthenticationLayout><BuyerPasswordVerify /></AuthenticationLayout> } />
      <Route path="/buyer/account/addpayment" element={ <AuthenticationLayout><BuyerAddPayment /></AuthenticationLayout> } />

    </Routes>
  )
}

export default Router