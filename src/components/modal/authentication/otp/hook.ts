import { 
  useForm, 
  SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"


const verifySchema = z.object({ otp: z.string().min(4) })

type VerifySchema = z.infer<typeof verifySchema>

export const useBuyerOtp = (callback: VoidFunction, dismiss: VoidFunction) =>{
  const {
    handleSubmit,
    control,
    reset,
    formState: {
      isValid,
      errors: formErrors
    } } = useForm<VerifySchema>({ 
      resolver: zodResolver(verifySchema),
      defaultValues: {
        otp: ""
      } 
  })

  const handleFormSubmit: SubmitHandler<VerifySchema> = data => {

    if ( data.otp ) {
      callback()
    }
  }

  return {
    handleSubmit: handleSubmit(handleFormSubmit),
    control,
    isValid,
    formErrors,
    reset: () => reset()
  }
}