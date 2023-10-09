import { zodResolver } from "@hookform/resolvers/zod"
import { 
  EmailOrFormSchema, 
  emailOrFormSchema } from "../../../schema"
import { 
  SubmitHandler, 
  useForm } from "react-hook-form"


export const useSignupWelcome = (successCallback: ( value: string ) => void) =>{
  const {
    register,
    handleSubmit,
    formState: {
      errors: formErrors,
      isValid
    } } = useForm<EmailOrFormSchema>({ resolver: zodResolver(emailOrFormSchema) })

  const handleFormSubmit: SubmitHandler<EmailOrFormSchema> = data => {
    successCallback(data.emailOrPhone)
  }

  return {
    register,
    handleSubmit: handleSubmit(handleFormSubmit),
    formErrors,
    isValid,
  }
}