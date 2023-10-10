import { PhoneVerificationIcon } from "@/components/svgs/verification/phone"
import { useNavigate } from "react-router"


type SuccessProps = { emailOrPhone: string }

const Success = ({ emailOrPhone }: SuccessProps) =>{
  const navigate = useNavigate()

  return (
    <div className="mb-5">
      <div className="max-w-max mx-auto mb-5">
        <PhoneVerificationIcon />
      </div>
      <p className="text-body-small text-surface-on mb-10 text-center">
        Please check your inbox. A verification mail has been sent to {" "}
        <span className="text-primary-color">{ emailOrPhone }</span>
      </p>
      <div className="">
				<button
					className={`tracking-[.1px] font-medium w-full rounded-md text-white text-label-large bg-primary-color py-[18px]`}
					type="button"
          onClick={ () => navigate("/buyer/login") } >Ok
				</button>
			</div>
    </div>
  )
}


export default Success