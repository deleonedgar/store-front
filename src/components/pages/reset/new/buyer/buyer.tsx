import { Link } from "react-router-dom"
import { ChangePasswordForm } from "./form"
import { BackIcon } from "@/components/svgs/back"
import { useResetBuyer } from "./hook"
import { PasswordSuccess } from "./success"


const Buyer = () =>{
  const { 
    passwordChanged,
    handlePasswordChanged } = useResetBuyer()

  return (
    <div className="bg-primary-on mx-auto p-4 sm:px-12 md:max-w-[524px] md:w-full md:p-[36px] md:shadow-md">
      <h1 className="text-title-large text-surface-on text-center mb-10 md:text-headline-large ">
        { passwordChanged? "Password Reset Succesful" : "Create New Password" }
      </h1>
      { passwordChanged? 
        <PasswordSuccess />
        :
        <ChangePasswordForm successCallback={ handlePasswordChanged } />
      }
      { !passwordChanged && (
        <div className="">
          <Link
            className={`tracking-[.1px] flex justify-center items-center font-medium w-full rounded-md text-primary-color text-label-large py-[18px]`}
            to="/buyer/login">
            <span className="w-[12px] h-[12px] mr-3 [&>svg]:w-full [&>svg]:h-full">
              <BackIcon />
            </span>
            <span>Back to log in</span>
          </Link>
        </div>
      ) }
    </div>
  )
}


export default Buyer