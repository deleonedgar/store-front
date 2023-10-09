import { SignupHero } from "./hero"
import { useBuyerSignup } from "./hook"
import { Link } from "react-router-dom"
import { BuyerOtpModal } from "@/components/modal/authentication/otp"
import { SignupWelcomeForm } from "./forms/welcome"
import { SignupProfilingForm } from "./forms/profiling"


const Buyer = () =>{
	const {
		handlePortal,
		Portal,
		redirect,
		emailOrPhone,
		currentForm,
		handleWelcomeSuccess,
		handleChangeCurrentForm,
		handlePortalSuccess } = useBuyerSignup()
		
	return (
		<>
			<Portal>
				<BuyerOtpModal
					emailOrPhone={ emailOrPhone }
					successCallback={ handlePortalSuccess }
					dismiss={ handlePortal } />
			</Portal>
			<SignupHero />
			<div className="px-4 pb-10 sm:px-12 mdl:shadow-md mdl:p-[36px] mdl:bg-white mdl:max-w-[523px] mdl:w-full outline-none">
				<div className={`${ currentForm===2? "!hidden" : "" } pt-[62px] mb-[87px] max-w-[max-content] mx-auto mdl:hidden`}>
					<img 
						src="/logos/shopindo.png"
						alt="Shop Indo" />
				</div>
				{ currentForm===1 && <SignupWelcomeForm successCallback={ handleWelcomeSuccess } /> }
				{ currentForm===2 && <SignupProfilingForm changeCurrentForm={ handleChangeCurrentForm } /> }
				<div className={`mdl:grid ${ currentForm===2? "!hidden" : "" }`}>
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
					<div className="">
						<p className="text-sm text-surface-onVariant flex items-center justify-center">
							Already have an account?
							<Link 
								className="tracking-[.1px] rounded-full font-medium text-primary-color py-[10px] px-3 hover:bg-[#f6f5ff]"
								to={ `/buyer/login${ redirect? `?redirect=${ redirect }` : "" }` }>Sign in
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}


export default Buyer