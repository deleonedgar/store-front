import { SuccessVerificationIcon } from "@/components/svgs/verification/success"
import { Link } from "react-router-dom"


const Success = () =>{

  return (
    <div className="mb-5">
      <div className="max-w-max mx-auto mb-5">
        <SuccessVerificationIcon />
      </div>
      <p className="text-body-small text-surface-on mb-10 text-center">You have successfully reset your password</p>
			<Link
				className={`tracking-[.1px] block text-center font-medium w-full rounded-md text-white text-label-large bg-primary-color py-[18px]`}
        to="/buyer/login" >Done
			</Link>
    </div>
  )
}


export default Success