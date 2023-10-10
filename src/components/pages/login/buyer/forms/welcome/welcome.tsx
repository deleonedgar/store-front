import { FormTextInput } from "@/components/shared/form/input/text"
import { useLoginWelcome } from "./hook"
import { FormPasswordInput } from "@/components/shared/form/input/password"


type WelcomeProps = {
  successCallback: ( value: string ) => void
}

const Welcome = ({ successCallback }: WelcomeProps) =>{
  const { 
    register,
    handleSubmit,
    formErrors,
    isValid } = useLoginWelcome(successCallback)

  return (
    <form
			className="mb-3 mdl:mb-5" 
			onSubmit={ handleSubmit }>
			<h1 className="text-title-large leading-tight text-surface-on text-center mb-10 mdl:text-headline-large mdl:text-left">Login</h1>
			<FormTextInput  
				translationLabel="Email or Phone Number"
				attributes={{ id: "welcomeEmailOrPhone" }}
				error={ formErrors.emailOrPhone?.message }
				className="mb-4 mdl:mb-5"
				{ ...register("emailOrPhone") } />
			<FormPasswordInput 
        translationLabel="Password"
        attributes={{ id: "welcomePassword" }}
        className="mb-5 mdl:mb-4"
        error={ formErrors.password?.message  }
				noIcon={ true }
        { ...register("password") } />
			<div className="mt-[30px] mdl:mt-10">
				<button
					className={`tracking-[.1px] font-medium m-0 w-full rounded-md text-surface-on/[.38]  text-sm transparent-bg bg-surface-on/[.12] py-[18px] ${ isValid? "!bg-primary-color !text-white": "" }`}
					type="submit"
					aria-disabled="true" >Continue
				</button>
			</div>
		</form>
  )
}


export default Welcome