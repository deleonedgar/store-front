import { 
  useGoogleLogin, 
  googleLogout } from "@react-oauth/google"
import { useNavigate } from "react-router"
import { useAddRedirect } from "./useAddRedirect"


export const useGoogle = () =>{
  const { redirect } = useAddRedirect()  
  const navigate = useNavigate()

  const login = useGoogleLogin({
    onSuccess: () =>{
      // dispatch profile here
      navigate(redirect?? "/")
    }
  })

  return {
    login: () => login(),
    logout: googleLogout
  }
}