import { AuthTimer } from "./timer"
import { BackIcon } from "@/components/svgs/back"
import { Controller } from "react-hook-form"
import OtpInput from 'react-otp-input';
import { useBuyerOtp } from "./hook";
import styles from "@/components/styles/input.styles.module.scss"


type OtpProps = {
  emailOrPhone: string | number,
  successCallback: VoidFunction,
  dismiss: VoidFunction
}

export const testForEmail = ( text: string ) => /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(text)

const Otp = ({ emailOrPhone, successCallback, dismiss }: OtpProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formErrors,
    isValid } = useBuyerOtp(successCallback, dismiss)

  return (
    <div >
      <div className="h-16 shadow-none">
        <div className="pl-2 h-full flex items-center">
            <button
              className="h-10 w-10 mx-0 rounded-full"
              onClick={() => {
                dismiss()
                reset()
              }}>
              <BackIcon />
            </button>
        </div>
      </div>
      <div>
        <form 
          className="px-4"
          onSubmit={handleSubmit}>
          <div className="pt-[30px] font-rubik mb-[30px]">
            <div className="max-w-[310px] text-center mx-auto">
              <h2 className="text-[22px] text-surface-on">{ testForEmail(`${ emailOrPhone }`)? "email address" : "phone number" }</h2>
              <p className=" text-xs text-surface-onVariant">
                Verification code sent via { testForEmail(`${ emailOrPhone }`)? "email" : "phone number" }. Enter the verification code below
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
                    className={`${ styles.removeArrows } ${ !!(formErrors.otp?.message && !props.value) && "border border-error-color" } block p-0 min-w-[70px] h-14 rounded-md border-outline-color border text-lg text-surface-on bg-transparent`}
                    type="number" />
                )} />
            )} />
          <div>
            <button
              className={`reset-ion-padding normal-case tracking-[.1px] font-medium m-0 mt-[30px] w-full rounded-md text-surface-on/[.38] font-rubik text-sm transparent-bg bg-surface-on/[.12] [&::part(native)]:py-[18px] [&::part(native)]:shadow-none ${ isValid? "!bg-primary-color !text-white": "" }`}
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