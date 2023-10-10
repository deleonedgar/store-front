import { useBuyerSignup } from "./hook"
import { Link } from "react-router-dom"
import { BuyerOtpModal } from "@/components/modal/authentication/otp"
import { SignupWelcomeForm } from "./forms/welcome"
import { SignupProfilingForm } from "./forms/profiling"
import { GoogleButton } from "@/components/shared/form/button/google"
import { PrivacyPolicy } from "@/components/shared/policy"
import { AppLogo } from "@/components/shared/logo"
import { AuthenticationHero } from "@/components/shared/hero/authentication"
import { useAddRedirect } from "@/lib/hooks/useAddRedirect"


const Buyer = () =>{
	const {
		handlePortal,
		Portal,
		emailOrPhone,
		currentForm,
		handleWelcomeSuccess,
		handleChangeCurrentForm,
		handlePortalSuccess } = useBuyerSignup()
	const { redirect } = useAddRedirect()

	return (
		<>
			<Portal>
				<BuyerOtpModal
					emailOrPhone={ emailOrPhone }
					successCallback={ handlePortalSuccess }
					dismiss={ handlePortal } />
			</Portal>
			<AuthenticationHero />
			<div className="px-4 pb-10 sm:px-12 mdl:shadow-md mdl:p-[36px] mdl:bg-white mdl:max-w-[523px] mdl:w-full outline-none">
				<div className={`${ currentForm===2? "!hidden" : "" } pt-[62px] mb-[87px] max-w-[max-content] mx-auto mdl:hidden`}>
					<AppLogo />
				</div>
				{ currentForm===1 && <SignupWelcomeForm successCallback={ handleWelcomeSuccess } /> }
				{ currentForm===2 && <SignupProfilingForm changeCurrentForm={ handleChangeCurrentForm } /> }
				<div className={`mdl:grid ${ currentForm===2? "!hidden" : "" }`}>
					<div className="mb-[30px] mdl:row-start-3">
						<PrivacyPolicy />
					</div>
					<div className="relative before:absolute before:w-full before:h-[1px] before:bg-outline-variant before:left-0 before:top-[7.5px] mdl:row-start-1">
						<p className="relative z-10 max-w-[max-content] mx-auto text-body-small text-surface-onVariant px-4 bg-white dark:bg-darkScheme">Or</p>
					</div>
					<div className="mb-[100px] mdl:row-start-2 mt-[30px] mdl:mt-5 mdl:mb-10">
						<GoogleButton />
					</div>
					<div>
						<p className="text-body-medium mdl:text-body-small text-surface-onVariant flex items-center justify-center">
							Already have an account?
							<Link 
								className="tracking-[.1px] ms-2 font-medium text-primary-color"
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