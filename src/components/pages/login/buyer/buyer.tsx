import { GoogleButton } from "@/components/shared/form/button/google"
import { AuthenticationHero } from "@/components/shared/hero/authentication"
import { AppLogo } from "@/components/shared/logo"
import { PrivacyPolicy } from "@/components/shared/policy"
import { useAddRedirect } from "@/lib/hooks/useAddRedirect"
import { Link } from "react-router-dom"
import { LoginWelcomeForm } from "./forms/welcome"
import { useBuyerLogin } from "./hook"
import { BuyerOtpModal } from "@/components/modal/authentication/otp"


const Buyer = () =>{
	const {
		Portal,
		emailOrPhone,
		handleWelcomeSuccess,
		handlePortalSuccess,
		handlePortal } = useBuyerLogin()
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
				<div className={`pt-[62px] mb-[87px] max-w-[max-content] mx-auto mdl:hidden`}>
					<AppLogo />
				</div>
				<LoginWelcomeForm successCallback={ handleWelcomeSuccess } />
				<div className="max-w-max mx-auto mb-5 mdl:ms-auto mdl:mx-0">
					<button className="text-primary-color font-medium text-body-small">Forgot Password?</button>
				</div>
				<div className="mdl:grid">
					<div className="relative before:absolute before:w-full before:h-[1px] before:bg-outline-variant before:left-0 before:top-[7.5px] mdl:row-start-1">
						<p className="relative z-10 max-w-[max-content] mx-auto text-body-small text-surface-onVariant px-4 bg-white dark:bg-darkScheme">Or</p>
					</div>
					<div className="mb-40 mdl:row-start-2 mt-[30px] mdl:mt-5 mdl:mb-10">
						<GoogleButton />
					</div>
					<div>
						<p className="text-body-medium mdl:text-body-small text-surface-onVariant flex items-center justify-center">
							Don't have an account?
							<Link
								className="tracking-[.1px] ms-2 font-medium text-primary-color"
								to={ `/buyer/signup${ redirect? `?redirect=${ redirect }` : "" }` }>Sign up
							</Link>
						</p>
					</div>
				</div>
			</div>
    </>
  )
}


export default Buyer