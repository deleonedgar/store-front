import { 
  useRef, 
  useState } from "react"
import { useModalPortal } from "@/components/modal/hook"
import { redirect, useNavigate } from "react-router-dom"


export const useBuyerLogin = () =>{
  const focusBackRef = useRef<HTMLDivElement | null>(null)
  const { handlePortal, Portal } = useModalPortal({
    focusBackRef: focusBackRef.current,
    background: "bg-[#FFFBFF]"
  })
  const [ emailOrPhone, setEmailOrPhone ] = useState("")
  const navigate = useNavigate()

  const handleWelcomeSuccess = ( value: string ) => {
    setEmailOrPhone(value)
    handlePortal()
  }

  const handlePortalSuccess = () =>{
    return navigate('/')
  }

  return {
    Portal,
    emailOrPhone,
    handleWelcomeSuccess,
    handlePortalSuccess,
    handlePortal
  }
}