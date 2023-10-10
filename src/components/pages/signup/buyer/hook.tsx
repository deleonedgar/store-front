import { 
  useRef, 
  useState } from "react"
import { useModalPortal } from "@/components/modal/hook"


export const useBuyerSignup = () =>{
  const focusBackRef = useRef<HTMLDivElement | null>(null)
  const { handlePortal, Portal } = useModalPortal({
    focusBackRef: focusBackRef.current,
    background: "bg-[#FFFBFF]"
  })
  const [ emailOrPhone, setEmailOrPhone ] = useState("")
  const [ currentForm, setCurrentForm ] = useState(1)

  const handleWelcomeSuccess = ( value: string ) => {
    setEmailOrPhone(value)
    handlePortal()
  }

  const handlePortalSuccess = () =>{
    handlePortal()
    handleChangeCurrentForm(2)
  }

  const handleChangeCurrentForm = ( formIndex: number ) =>{
    setCurrentForm(formIndex)
  }

  return {
    handlePortal,
    Portal,
    emailOrPhone,
    currentForm,
    handleWelcomeSuccess,
    handleChangeCurrentForm,
    handlePortalSuccess
  }
}