import { useState } from "react"


export const useResetBuyer = () =>{
  const [ passwordChanged, setPasswordChanged ] = useState(false)

  const handlePasswordChanged = () => setPasswordChanged(true)

  return {
    passwordChanged,
    handlePasswordChanged
  }
}