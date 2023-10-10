import { FormTextInput } from "@/components/shared/form/input/text"
import { useResetForm } from "./hook"
import { FormPasswordInput } from "@/components/shared/form/input/password"
import { useFormPassword } from "@/components/shared/form/input/password/hook"


type FormProps = {
  successCallback: VoidFunction
}

const Form = ({ successCallback }: FormProps) =>{
  const { 
    register,
    formErrors,
    isValid,
    watch,
    handleSubmit } = useResetForm(successCallback)
  const {
    passwordVisibility,
    togglePasswordVisibility,
    confirmPasswordVisibility,
    toggleConfirmPasswordVisibility } = useFormPassword()

  return (
    <form
      className="mb-5" 
      onSubmit={ handleSubmit }>
      <div>
      <FormPasswordInput 
        translationLabel="Password"
        attributes={{ id: "newPassword" }}
        isVisible={ passwordVisibility }
        toggleVisibility={ togglePasswordVisibility }
        className="mb-2"
        error={ formErrors.password?.message }
        { ...register("password") } />
      <div className="mb-4 mt-2 ps-2">
        <ul className="font-rubik">
          <li className={`text-body-small text-surface-onVariant flex items-center mb-1 ${ watch("password").trim().replace(/\s/g, '').length>=6? "!text-secondary-color [&>span]:bg-secondary-color" : "" }`}>
            <span className="h-[10px] w-[10px] rounded-full border border-surface-onVariant border-solid mr-2"></span>
            Password must be at least 6 characters
          </li>
          <li className={`text-body-small text-surface-onVariant flex items-center mb-1 ${ watch("password").match(/[a-z]/) !==null? "!text-secondary-color [&>span]:bg-secondary-color" : "" }`}>
            <span className="h-[10px] w-[10px] rounded-full border border-surface-onVariant border-solid mr-2"></span>
            1 lowercase
          </li>
          <li className={`text-body-small text-surface-onVariant flex items-center mb-1 ${ watch("password").match(/\d/) !==null? "!text-secondary-color [&>span]:bg-secondary-color" : "" }`}>
            <span className="h-[10px] w-[10px] rounded-full border border-surface-onVariant border-solid mr-2"></span>
            1 number
          </li>
          <li className={`text-body-small text-surface-onVariant flex items-center mb-1 ${ watch("password").match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) !==null? "!text-secondary-color [&>span]:bg-secondary-color" : "" }`}>
            <span className="h-[10px] w-[10px] rounded-full border border-surface-onVariant border-solid mr-2"></span>
            1 special character
          </li>
          <li className={`text-body-small text-surface-onVariant flex items-center ${ watch("password").match(/[A-Z]/) !==null? "!text-secondary-color [&>span]:bg-secondary-color" : "" }`}>
            <span className="h-[10px] w-[10px] rounded-full border border-surface-onVariant border-solid mr-2"></span>
            1 uppercase
          </li>
        </ul>
      </div>
      </div>
      <FormPasswordInput 
        translationLabel="Confirm Password"
        attributes={{ id: "newConfirmPassword" }}
        isVisible={ confirmPasswordVisibility }
        toggleVisibility={ toggleConfirmPasswordVisibility }
        className="mb-5 md:mb-10"
        error={ formErrors.confirmPassword?.message ??formErrors.password?.message  }
        { ...register("confirmPassword") } />
      <div className="">
				<button
					className={`tracking-[.1px] font-medium m-0 w-full rounded-md text-surface-on/[.38] text-sm transparent-bg bg-surface-on/[.12] py-[18px] ${ isValid? "!bg-primary-color !text-white": "" }`}
					type="submit"
					aria-disabled={ !isValid } >Ok
				</button>
			</div>
    </form>
  )
}


export default Form