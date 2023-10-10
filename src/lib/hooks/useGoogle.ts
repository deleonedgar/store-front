import { 
  useGoogleLogin, 
  googleLogout } from "@react-oauth/google"
import { useNavigate } from "react-router"
import { useAddRedirect } from "./useAddRedirect"
import { useAppDispatch } from "@/store/hooks"
import { setCustomerProfile } from "@/store/slices/customer"
import { useEffect } from "react"
import { useLazyGetGoogleProfileQuery } from "@/store/api/google"


export const useGoogle = () =>{
  const { redirect } = useAddRedirect()  
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [ sendToken, query ] = useLazyGetGoogleProfileQuery()

  const login = useGoogleLogin({
    onSuccess: (data) =>{
      sendToken(data.access_token)
    }
  })

  useEffect(() =>{
    if ( query.status==="fulfilled" ) {
      const { data } = query
      dispatch(setCustomerProfile({
        emailOrPhone: data.email,
        firstname: data.given_name,
        lastname: data.family_name
      }))
      navigate(redirect?? "/")
    }
  }, [ query.status ])

  return {
    login: () => login(),
    logout: googleLogout
  }
}