import { Link } from "react-router-dom"


const Policy = () =>{

  return (
    <p className="block text-body-small font-medium text-surface-onVariant max-w-[284px] mx-auto text-center">
			By signing up, I agree to Shopindo  
			<Link 
				className="text-primary-color mdl:underline"
				to="/policy">
				{" "} Terms & Conditions and Privacy Policy.
			</Link>
		</p>
  )
}


export default Policy