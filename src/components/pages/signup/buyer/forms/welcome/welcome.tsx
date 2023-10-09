import { FormTextInput } from "@/components/shared/form/input/text"
import { useSignupWelcome } from "./hook"


type WelcomeProps = {
  successCallback: ( value: string ) => void
}

const Welcome = ({ successCallback }: WelcomeProps) =>{
  const { 
    register,
    handleSubmit,
    formErrors,
    isValid } = useSignupWelcome(successCallback)

  return (
    <form
			className="mb-10 mdl:mb-5" 
			onSubmit={ handleSubmit }>
			<h1 className="text-title-large leading-tight text-surface-on text-center mb-10 mdl:text-headline-large mdl:text-left">Sign Up</h1>
			<FormTextInput  
				translationLabel="Email or Phone Number"
				attributes={{ id: "signupEmailOrPhoneFirst" }}
				error={ formErrors.emailOrPhone?.message }
				noBottomMargin={ true }
				{ ...register("emailOrPhone") } />
			<div className="mt-[30px]">
				<button
					className={`tracking-[.1px] font-medium m-0 w-full rounded-md text-surface-on/[.38]  text-sm transparent-bg bg-surface-on/[.12] py-[18px] ${ isValid? "!bg-primary-color !text-white": "" }`}
					type="submit"
					aria-disabled="true" >
					<span className="mdl:hidden">Next</span>
					<span className="hidden mdl:inline">Continue</span>
				</button>
			</div>
		</form>
  )
}


export default Welcome