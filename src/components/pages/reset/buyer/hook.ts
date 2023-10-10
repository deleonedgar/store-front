import { useState } from "react"


export const useResetBuyer = () =>{
  const [ emailOrPhone, setEmailOrPhone ] = useState("")

  const handleEmailOrPhoneAddition = ( value: string ) => setEmailOrPhone(value)

  return {
    emailOrPhone,
    handleEmailOrPhoneAddition
  }
}