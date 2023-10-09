import * as Ariakit from "@ariakit/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dayjs } from "dayjs"
import { 
  SubmitHandler, 
  useForm } from "react-hook-form"
import z from "zod"


const profilingSchema = z.object({
  fullname: z.string().min(1, "Please enter your fullname"),
  gender: z.enum(["Male", "Female"], { required_error: "Gender is required" }),
  birth: z.string({ required_error: "Birth date required" }),
  password: z
    .string()
    .min(6, "Please follow the rules")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/, "Please follow the rules"),
  confirmPassword: z.string().min(6, "Confirm password is required")
})

type ProfilingSchema = z.TypeOf<typeof profilingSchema>

export const useProfiling = () =>{
  const { 
    register,
    formState: {
      errors: formErrors,
      isValid
    },
    watch,
    handleSubmit,
    setValue,
    setError } = useForm<ProfilingSchema>({ 
      resolver: zodResolver(profilingSchema),
      defaultValues: {
        password: ""
      }
    })
   const select = Ariakit.useSelectStore({
     setValue: value => {
       if ( !value ) return 
  
       setValue("gender", value as ProfilingSchema["gender"], { shouldValidate: true })
     }
   })

  const handleFormSubmit: SubmitHandler<ProfilingSchema> = data => {
    if ( data.confirmPassword !== data.password ) {
      setError("password", {
        message: "Password mismatch"
      })
      
      return
    }
  }

  const handleDateChange = ( date: Dayjs | null ) =>{
    if ( !date ) return 

    setValue("birth", `${ date.toDate() }`, { shouldValidate: true })
  }

  return {
    register,
    formErrors,
    isValid,
    watch,
    handleSubmit: handleSubmit(handleFormSubmit),
    select,
    setValue,
    handleDateChange
  }
}