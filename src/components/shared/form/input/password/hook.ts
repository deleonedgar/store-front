import { useState } from "react"


export const useFormPassword = () =>{
  const [ passwordVisibility, setPasswordVisibility ] = useState(false)
  const [ confirmPasswordVisibility, setConfirmPasswordVisibility ] = useState(false)

  return {
    passwordVisibility,
    confirmPasswordVisibility,
    togglePasswordVisibility: () => setPasswordVisibility(prev => !prev),
    toggleConfirmPasswordVisibility: () => setConfirmPasswordVisibility(prev => !prev),
  }
}