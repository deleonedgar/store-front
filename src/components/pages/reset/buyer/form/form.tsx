import { FormTextInput } from "@/components/shared/form/input/text"
import { useResetForm } from "./hook"


type FormProps = {
  successCallback: ( value: string ) => void
}

const Form = ({ successCallback }: FormProps) =>{
  const { 
    register,
    formErrors,
    isValid,
    handleSubmit } = useResetForm(successCallback)

  return (
    <form
      className="mb-5" 
      onSubmit={ handleSubmit }>
      <FormTextInput  
				translationLabel="Email or Phone Number"
				attributes={{ id: "resetEmailOrPhone" }}
				error={ formErrors.emailOrPhone?.message }
				className="mb-[30px] mdl:mb-10"
				{ ...register("emailOrPhone") } />
      <div className="">
				<button
					className={`tracking-[.1px] font-medium m-0 w-full rounded-md text-surface-on/[.38] text-sm transparent-bg bg-surface-on/[.12] py-[18px] ${ isValid? "!bg-primary-color !text-white": "" }`}
					type="submit"
					aria-disabled={ !isValid } >Continue
				</button>
			</div>
    </form>
  )
}


export default Form