import { AuthTimer } from "./timer"
import { BackIcon } from "@/components/svgs/back"
import { Controller } from "react-hook-form"
import OtpInput from 'react-otp-input';
import { useBuyerOtp } from "./hook";
import styles from "@/components/styles/input.styles.module.scss"
import { VerificationIcon } from "@/components/svgs/verification";
import { EmailOrFormSchema } from "@/components/pages/signup/schema";


type OtpProps = {
  successCallback: VoidFunction,
  dismiss: VoidFunction
} & EmailOrFormSchema

export const testForEmail = ( text: string ) => /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(text)

const Otp = ({ emailOrPhone, successCallback, dismiss }: OtpProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formErrors,
    isValid } = useBuyerOtp(successCallback, dismiss)

  return (
    <div className="relative z-50 md:max-w-[524px] md:mx-auto md:bg-white md:my-[204px]">
      <div className="h-16 shadow-none md:hidden">
        <div className="pl-2 h-full flex items-center">
            <button
              className="h-10 w-10 mx-0 rounded-full inline-flex items-center justify-center"
              onClick={() => {
                dismiss()
                reset()
              }}>
              <BackIcon />
            </button>
        </div>
      </div>
      <div className="md:p-[36px] md:pt-1 md:shadow-md">
        <form 
          className="px-4 md:px-0"
          onSubmit={handleSubmit}>
          <div className="pt-[30px] font-rubik mb-[30px]">
            <div className="max-w-[310px] text-center mx-auto md:max-w-max">
              <h2 className="text-[22px] text-surface-on md:text-headline-large md:mb-10">
                Verify {" "}
                <span className="md:hidden">your </span> 
                { testForEmail(`${ emailOrPhone }`)? "email address" : "phone number" }</h2>
              <div className="hidden md:flex md:justify-center md:mb-5">
                <VerificationIcon />
              </div>
              <p className="text-body-small text-surface-onVariant">
                <span>
                  Verification code sent via { testForEmail(`${ emailOrPhone }`)? "email" : "phone number" }{" "}{ emailOrPhone }. Enter the verification code below
                </span>
              </p>
            </div>
          </div>
          <Controller
            control={ control } 
            name="otp"
            render={({field:{ ref, ...rest }}) => (
              <OtpInput
                {...rest}
                numInputs={4}
                containerStyle="justify-center mb-[30px] [&>input:not(:last-child)]:mr-4 [&>input]"
                renderSeparator={<span />}
                renderInput={(props) => (
                  <input 
                    {...props}
                    aria-invalid={ !!(formErrors.otp?.message && !props.value) }
                    className={`block p-0 min-w-[70px] h-14 rounded-md border-outline-color border text-lg text-surface-on bg-transparent ${ styles.removeArrows } ${ !!(formErrors.otp?.message && !props.value) && "border !border-error-color" } `}
                    type="number" />
                )} />
            )} />
          <div>
            <button
              className={`font-medium mt-[30px] w-full rounded-md text-surface-on/[.38] text-label-large bg-surface-on/[.12] py-[18px] ${ isValid? "bg-primary-color text-white" : "" }`}
              type="submit"
              aria-disabled={ !isValid } >Verify
            </button>
          </div>
        </form>
        <AuthTimer resendOTP={() => {}} />
      </div>
    </div>
  )
}


export default Otp