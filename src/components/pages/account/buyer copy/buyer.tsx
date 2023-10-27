import { GoogleButton } from "@/components/shared/form/button/google"
import { AuthenticationHero } from "@/components/shared/hero/authentication"
import { AppLogo } from "@/components/shared/logo"
import { PrivacyPolicy } from "@/components/shared/policy"
import { useAddRedirect } from "@/lib/hooks/useAddRedirect"
import { Link } from "react-router-dom"
import { useBuyerAccount } from "./hook"
import { BuyerOtpModal } from "@/components/modal/authentication/otp"
import { dividerClasses } from "@mui/material"
import { WriteIcon } from "@/components/shared/icons/write"


const Buyer = () =>{
	const {
		Portal,
		emailOrPhone,
		handleWelcomeSuccess,
		handlePortalSuccess,
		handlePortal } = useBuyerAccount()
  const { redirect } = useAddRedirect()

  return (
    <>
    <div className="px-6 pb-10 sm:px-6 mdl:shadow-md mdl:p-[36px] mdl:bg-white mdl:w-full">
        <h2 className="text-lg">Account Overview</h2>
        
        <div className="mdl:grid">
            <div className="py-4 relative before:absolute before:w-full before:h-[1px] before:bg-outline-variant before:left-0 before:top-[7.5px] mdl:row-start-1">
                <p className="relative z-10 max-w-[max-content] mx-auto text-body-small text-surface-onVariant px-4 bg-white dark:bg-darkScheme"></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <div className="max-w-xl border rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                        <div className="text-sm mb-2 flex">
                                <span>Account Details</span>
                                <span className="ml-auto">
                                    <Link
                                        className="tracking-[.1px]"
                                        to={ `/buyer/account/editaccount` }> 
                                        <WriteIcon />
                                    </Link>
                                </span>
                            </div>
                            <div className="border-b mb-2"></div> {/* Line separator */}
                            <div className="text-gray-700 text-base">
                                <p className="text-xs mb-1" style={{fontSize:"14px"}}><label htmlFor="">Full Name : </label>John Joe</p>
                                <p className="text-xs mb-1" style={{fontSize:"14px"}}><label htmlFor="">Email Address : </label>johnjoe@gmail.com</p>
                                <p className="text-xs mb-1" style={{fontSize:"14px"}}><label htmlFor="">Phone Number : </label>09061040175</p>
                                <p className="text-xs mb-1" style={{fontSize:"14px"}}><label htmlFor="">Birthday : </label>January 1 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <div className="max-w-xl border rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="text-sm mb-2 flex">
                                <span> Delivery Address</span>
                                <span className="ml-auto">
                                    <Link
                                        className="tracking-[.1px]"
                                        to={ `/buyer/account/address` }> 
                                        <WriteIcon />
                                    </Link>
                                </span>
                            </div>
                            <div className="border-b mb-2"></div> {/* Line separator */}
                            <div className="text-gray-700 text-base">
                            <p className="text-mg text-center m-8">Your default delivery details:</p>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <div className="max-w-xl border rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                        <div className="text-sm mb-2 flex">
                                <span className="mr-2">My Payment Options</span>
                                <span> | </span>
                                <Link className="tracking-[.1px] ml-2" to="/buyer/account/addpayment" style={{ color: "red", fontSize: "13px" }}> Add Card
                                </Link>
                                <span className="ml-auto">
                                    <Link
                                        className="tracking-[.1px]"
                                        to={ `/buyer/account/editpayment` }> 
                                        <WriteIcon />
                                    </Link>
                                </span>
                            </div>
                            <div className="border-b mb-2"></div> {/* Line separator */}
                            <div className="text-gray-700 text-base">
                                <p className="text-mg text-center m-8">No Payment Options</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
        <br />
      {/* <div className="px-4 pb-10 sm:px-12 mdl:shadow-md mdl:p-[36px] mdl:bg-white mdl:max-w-[523px] mdl:w-full outline-none">
      
                <div className="max-w-max mx-auto mb-5 mdl:ms-auto mdl:mx-0">
					<Link 
						className="text-primary-color font-medium text-body-small"
						to="/buyer/reset">Forgot Password?</Link>
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
			</div> */}
    </>
  )
}


export default Buyer