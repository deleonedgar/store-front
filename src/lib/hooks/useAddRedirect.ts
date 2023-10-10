import { useLocation } from "react-router-dom"


export const useAddRedirect = () =>{
  const location = useLocation()
  const params = new URLSearchParams(location.search)

  return { redirect: params.get("redirect") }
}