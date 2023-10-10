import { zodResolver } from "@hookform/resolvers/zod"
import { 
  SubmitHandler, 
  useForm } from "react-hook-form"
import z from "zod"


const formSchema = z.object({
  password: z
    .string()
    .min(6, "Please follow the rules")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/, "Please follow the rules"),
  confirmPassword: z.string().min(6, "Confirm password is required")
}) 

type FormSchema = z.TypeOf<typeof formSchema>

export const useResetForm = ( successCallback: VoidFunction) =>{
  const { 
    register,
    formState: {
      errors: formErrors,
      isValid
    },
    watch,
    setError,
    handleSubmit } = useForm<FormSchema>({ 
      resolver: zodResolver(formSchema),
      defaultValues: {
        password: "",
      }
    })

  const handleSubmitHandler: SubmitHandler<FormSchema> = data => {
    if ( data.password !== data.confirmPassword ) {
      setError("password", { message: "Password does not match" })

      return
    }
    successCallback()
  }

  return {
    register,
    watch,
    formErrors,
    isValid,
    handleSubmit: handleSubmit(handleSubmitHandler)
  }
}