import { 
  SubmitHandler, 
  useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"


const formSchema = z.object({
  emailOrPhone: z
    .string()
    .email({ message: "Invalid email or phone number" })
    .or(z.string().regex(/^\d+$/).min(9))
})

type FormSchema = z.TypeOf<typeof formSchema>

export const useBuyerSignup = () =>{
  const {
    register,
    handleSubmit,
    formState: {
      errors: formErrors,
      isValid
    } } = useForm<FormSchema>({ resolver: zodResolver(formSchema) })

  const onSubmitHandler: SubmitHandler<FormSchema> = data => {
    
  }

  return {
    register,
    handleSubmit: handleSubmit(onSubmitHandler),
    formErrors,
    isValid
  }
}