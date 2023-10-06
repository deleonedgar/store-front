import { FormTextInput } from "@/components/shared/form/input/text"
import { SignupHero } from "./hero"
import { useBuyerSignup } from "./hook"
import { 
	Link, 
	useLocation } from "react-router-dom"
import { BaseModal } from "@/components/modal"
import { useRef } from "react"
import { BuyerOtpModal } from "@/components/modal/authentication/otp"


const Buyer = () =>{
	const {
		register,
		handleSubmit,
		formErrors,
		isValid,
		otpVisibility,
		handleOtpVisibility,
		getValues } = useBuyerSignup()
	const location = useLocation()
	const params = new URLSearchParams(location.search)
	const focusBackRef = useRef<HTMLDivElement>(null)
		
	return (
		<>
			{ otpVisibility && (
				<BaseModal
					focusBackRef={ focusBackRef.current }
					exit={ handleOtpVisibility }
					background="bg-[#FFFBFF]">
					<BuyerOtpModal 
						emailOrPhone={ getValues("emailOrPhone") }
						successCallback={ () => {} }
						dismiss={ handleOtpVisibility } />
				</BaseModal>
			) }
			<SignupHero />
			<div className="px-4 pb-10 sm:px-12 mdl:shadow-md mdl:p-[36px] mdl:bg-white mdl:max-w-[523px] mdl:w-full outline-none">
				<div className="mt-[62px] mb-[87px] max-w-[max-content] mx-auto mdl:hidden">
					<img 
						src="/logos/shopindo.png"
						alt="Shop Indo" />
				</div>
				<h1 className="text-[22px] text-surface-on text-center mb-10 mdl:text-[32px] mdl:text-left">Sign Up</h1>
				<form
					className="mb-10 mdl:mb-5" 
					onSubmit={ handleSubmit }>
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
				<div className="mdl:grid">
					<div className="mb-[30px] mdl:row-start-3">
						<p className="block text-xs font-medium text-surface-onVariant max-w-[284px] mx-auto text-center">
							By signing up, I agree to Shopindo  
							<Link 
								className="text-primary-color mdl:underline"
								to="/policy">
								{" "} Terms & Conditions and Privacy Policy.
							</Link>
						</p>
					</div>
					<div className="relative before:absolute before:w-full before:h-[1px] before:bg-outline-variant before:left-0 before:top-[7.5px] mdl:row-start-1">
						<p className="relative z-10 max-w-[max-content] mx-auto text-xs text-surface-onVariant px-4 bg-white dark:bg-darkScheme">Or</p>
					</div>
					<div className="mb-[100px] mdl:row-start-2 mt-[30px] mdl:mt-5 mdl:mb-10">
						<button
							className="flex justify-center items-center tracking-[.1px] font-medium m-0 w-full border border-outline-color rounded-md text-surface-onVariant text-sm transparent-bg py-4" 
							type="button" >
								<img
									className="mr-4 md:mr-2" 
									src="/svgs/google.svg"
									alt="google" />
								<span className="md:hidden">Continue with </span>
								Google
						</button>
					</div>
				</div>
				<div className="">
					<p className="text-sm text-surface-onVariant flex items-center justify-center">
						Already have an account?
						<Link 
							className="tracking-[.1px] rounded-full font-medium text-primary-color py-[10px] px-3 hover:bg-[#f6f5ff]"
							to={ `/buyer/login${ params.get("redirect")? `?redirect=${ params.get("redirect") }` : "" }` }>Sign in
						</Link>
					</p>
				</div>
			</div>
		</>
	)
}


export default Buyer