import { 
  EmailOrFormSchema, 
  emailOrFormSchema } from "@/components/pages/signup/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { 
  SubmitHandler, 
  useForm } from "react-hook-form"


export const useResetForm = ( successCallback: ( value: string ) => void ) =>{
  const { 
    register,
    formState: {
      errors: formErrors,
      isValid
    },
    handleSubmit } = useForm<EmailOrFormSchema>({ resolver: zodResolver(emailOrFormSchema) })

  const handleSubmitHandler: SubmitHandler<EmailOrFormSchema> = data => {
    successCallback(data.emailOrPhone)
  }

  return {
    register,
    formErrors,
    isValid,
    handleSubmit: handleSubmit(handleSubmitHandler)
  }
}