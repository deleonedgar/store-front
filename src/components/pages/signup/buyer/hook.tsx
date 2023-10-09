import { 
  SubmitHandler, 
  useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRef } from "react"
import { 
  EmailOrFormSchema, 
  emailOrFormSchema } from "../schema"
import { useModalPortal } from "@/components/modal/hook"


export const useBuyerSignup = () =>{
  const {
    register,
    handleSubmit,
    formState: {
      errors: formErrors,
      isValid
    },
    getValues } = useForm<EmailOrFormSchema>({ resolver: zodResolver(emailOrFormSchema) })
  const focusBackRef = useRef<HTMLDivElement | null>(null)
  const { handlePortal, Portal } = useModalPortal({
    focusBackRef: focusBackRef.current,
    background: "bg-[#FFFBFF]"
  })

  const onSubmitHandler: SubmitHandler<EmailOrFormSchema> = data => {
    handlePortal()
  }

  return {
    register,
    handleSubmit: handleSubmit(onSubmitHandler),
    formErrors,
    isValid,
    getValues,
    handlePortal,
    Portal
  }
}