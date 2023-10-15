import { BuyerAccount } from "@/components/pages/account/buyer"
import { SideBar } from "@/components/shared/navigation/pane"


const Account = () =>{

	return (
		<main className="bg-background mdl:px-6 mdl:pt-12 mdl:pb-[clamp(64px,20vw,228px)]">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <SideBar />
                </div>
                <div className="col-span-1 md:col-span-3 lg:col-span-3">
                    <BuyerAccount />
                </div>
            </div>
		</main>
	)
}


export default Account