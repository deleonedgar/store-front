import { useGoogle } from "@/lib/hooks/useGoogle"


const Google = () =>{
	const { 
		login,
		logout } = useGoogle()

  return (
		<button
			className="flex justify-center items-center tracking-[.1px] font-medium m-0 w-full border border-outline-color rounded-md text-surface-onVariant text-label-large transparent-bg py-4" 
			type="button"
			onClick={ login } >
			<img
				className="mr-4 md:mr-2" 
				src="/svgs/google.svg"
				alt="google" />
			<span className="md:hidden">Continue with Google</span>
			<span className="hidden md:inline">Google</span>
		</button>
  )
}


export default Google