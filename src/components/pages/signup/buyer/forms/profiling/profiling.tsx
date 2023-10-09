import { FormTextInput } from "@/components/shared/form/input/text"
import { useProfiling } from "./hook"
import * as Ariakit from "@ariakit/react"
import { SelectDropdownIcon } from "@/components/svgs/selectDropdown"
import { FormPasswordInput } from "@/components/shared/form/input/password"
import { useFormPassword } from "@/components/shared/form/input/password/hook"
import { DatePicker } from "@mui/x-date-pickers"
import styles from "./style.module.scss"
import { BackIcon } from "@/components/svgs/back"
import { Controller } from "react-hook-form"
import { Dayjs } from "dayjs"


type ProfilingProps = {
  changeCurrentForm: ( formIndex: number ) => void
}

const Profiling = ({ changeCurrentForm }: ProfilingProps) => {
  const { 
    register,
    formErrors,
    isValid,
    watch,
    handleSubmit,
    select,
    setValue } = useProfiling()
  const {
    passwordVisibility,
    togglePasswordVisibility,
    confirmPasswordVisibility,
    toggleConfirmPasswordVisibility } = useFormPassword()

  return (
    <>
      <div className="h-16 shadow-none -translate-x-4 mdl:hidden">
        <div className="pl-2 h-full flex items-center">
          <button
            className="h-10 w-10 mx-0 rounded-full inline-flex items-center justify-center"
            onClick={() => changeCurrentForm(1)}>
            <BackIcon />
          </button>
        </div>
      </div>
			<div className="mb-10 pt-[30px] mdl:pt-0">
				<h1 className="text-title-large leading-tight text-surface-on text-center mdl:mb-2 mdl:text-headline-large mdl:text-left">Personal Information</h1>
				<p className="text-body-small text-surface-on text-center mdl:text-left">We just need some information from you.</p>
			</div>
			<form
				className="mb-10 mdl:mb-4" 
				onSubmit={ handleSubmit }>
				<FormTextInput
					translationLabel="Full name"
					attributes={{ id: "profileFullname" }}
					error={ formErrors.fullname?.message }
					{ ...register("fullname") } />
				<div className="w-full mb-4">
          <div className="relative w-full">
            <Ariakit.Select 
              store={select} 
              className={`${ styles.select } w-full min-h-[56px] flex justify-between items-center py-4 pl-4 rounded border border-solid border-outline-color [&>span]:hidden peer`}
              data-hasvalue={ `${ !!watch("gender") }` } />
              <span className="absolute top-1/2 right-[20px] -translate-y-1/2">
                <SelectDropdownIcon />
              </span>
            <Ariakit.SelectLabel 
              store={select}
              className={` bg-white dark:bg-darkScheme select-label text-surface-onVariant absolute font-rubik duration-300 transform left-4 top-1/2 -translate-y-1/2  peer-data-[aria-expanded=true]-translate-y-0 ${ formErrors.gender? "!text-primary-color" : "" }`}>Gender
            </Ariakit.SelectLabel>
            <Ariakit.SelectPopover
              store={select}
              gutter={4}
              sameWidth
              className="popover z-10 bg-white dark:bg-darkScheme rounded border border-solid border-outline-color focus-visible:outline-none">
              <Ariakit.SelectItem value="" />
              <Ariakit.SelectItem className="select-item py-1 px-2 data-[active-item]:bg-surface-color data-[aria-selected=true]:bg-surface-color" value="Male" />
              <Ariakit.SelectItem className="select-item py-1 px-2 data-[active-item]:bg-surface-color data-[aria-selected=true]:bg-surface-color" value="Female" />
            </Ariakit.SelectPopover>
          </div>
          { formErrors.gender?.message && <span className=" text-xs text-error-color px-4 mt-1">{ formErrors.gender.message }</span> }
        </div>
        <div className="mb-4">
          <DatePicker 
            className={`${ styles.datepicker } datepicker w-full [&>div>fieldset]:border-outline-color [&>label]:!text-surface-onVariant [&>label]:bg-white`}
            label="Date of Birth"
            onChange={ (date: Dayjs | null) => {
              if ( !date ) return
              
              setValue("birth", `${ date.toDate() }`)
            } } />
        </div>
        <div>
          <FormPasswordInput 
            translationLabel="Password"
            attributes={{ id: "profilePassword" }}
            isVisible={ passwordVisibility }
            toggleVisibility={ togglePasswordVisibility }
            error={ formErrors.password?.message }
            noBottomMargin={ true }
            { ...register("password") } />
          <div className="mb-4 mt-2 ps-2">
            <p className="text-xs text-surface-onVariant mb-[6px]">Password must have</p>
            <ul className="max-w-[268px] sm:max-w-max flex flex-wrap">
              <li className={`bg-[#F6FFF0] py-[3px] px-[9px] rounded-full text-surface-onVariant mr-1 mb-1 text-xs max-w-[max-content] ${ watch("password").trim().replace(/\s/g, '').length>=8? "!bg-secondary-color !text-secondary-on" : "" }`}>6 characters</li>
              <li className={`bg-[#F6FFF0] py-[3px] px-[9px] rounded-full text-surface-onVariant mr-1 mb-1 text-xs max-w-[max-content] ${ watch("password").match(/[a-z]/) !==null? "!bg-secondary-color !text-secondary-on" : "" }`}>1 lowercase</li>
              <li className={`bg-[#F6FFF0] py-[3px] px-[9px] rounded-full text-surface-onVariant mr-1 mb-1 text-xs max-w-[max-content] ${ watch("password").match(/\d/) !==null? "!bg-secondary-color !text-secondary-on" : "" }`}>1 number</li>
              <li className={`bg-[#F6FFF0] py-[3px] px-[9px] rounded-full text-surface-onVariant mr-1 mb-1 text-xs max-w-[max-content] ${ watch("password").match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) !==null? "!bg-secondary-color !text-secondary-on" : "" }`}>1 special character</li>
              <li className={`bg-[#F6FFF0] py-[3px] px-[9px] rounded-full text-surface-onVariant mr-1 mb-1 text-xs max-w-[max-content] ${ watch("password").match(/[A-Z]/) !==null? "!bg-secondary-color !text-secondary-on" : "" }`}>1 uppercase</li>
            </ul>
          </div>
        </div>
        <FormPasswordInput 
          translationLabel="Confirm Password"
          attributes={{ id: "profileConfirmPassword" }}
          isVisible={ confirmPasswordVisibility }
          toggleVisibility={ toggleConfirmPasswordVisibility }
          error={ formErrors.password?.message }
          { ...register("confirmPassword") } />
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
    </>
  )
}


export default Profiling