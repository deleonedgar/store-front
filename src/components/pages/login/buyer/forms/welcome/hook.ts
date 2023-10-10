import { emailOrFormSchema } from "@/components/pages/signup/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { 
  SubmitHandler, 
  useForm } from "react-hook-form"
import z from "zod"


const loginSchema = z.object({
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Please enter atleast 6 characters")
}).merge(emailOrFormSchema)


type LoginSchema = z.TypeOf<typeof loginSchema>

export const useLoginWelcome = (successCallback: ( value: string ) => void) =>{
  const {
    register,
    handleSubmit,
    formState: {
      errors: formErrors,
      isValid
    } } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) })

  const handleFormSubmit: SubmitHandler<LoginSchema> = data => {
    successCallback(data.emailOrPhone)
  }

  return {
    register,
    handleSubmit: handleSubmit(handleFormSubmit),
    formErrors,
    isValid,
  }
}