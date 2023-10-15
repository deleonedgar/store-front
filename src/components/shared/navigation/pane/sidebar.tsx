import { Link } from "react-router-dom"
import { useAddRedirect } from "@/lib/hooks/useAddRedirect"
import { AccountIcon } from "../../icons/account"
import { OrderIcon } from "../../icons/orders"
import { InboxIcon } from "../../icons/inbox"
import { SavedIcon } from "../../icons/saved"
import { PendingReviewIcon } from "../../icons/review"
import { SellerIcon } from "../../icons/seller"
import { LogoutIcon } from "../../icons/logout"
import { CloseAccountIcon } from "../../icons/account/close"


const SideBar = () =>{
	const { redirect } = useAddRedirect()

  return (
    
    <div className="py-0 px-4 pb-10 h-full">
        <div className="mdl:px-6 outline-none">
            <div className="md:grid-cols-1 lg:grid-cols-1 gap-2 min-h-screen flex flex-col">
                <p className="text-body-medium mdl:text-body-small text-surface-onVariant flex items-left justify-left">
                    <Link
                        className="tracking-[.1px]"
                        to={ `/buyer/account` }>
                            <div className="flex pt-2">
                                <AccountIcon /> 
                                <p className="pl-2">My Account</p> 
                            </div>
                    </Link>
                </p>
                <p className="text-body-medium mdl:text-body-small text-surface-onVariant flex items-left justify-left">
                    <Link
                        className="tracking-[.1px]"
                        to={ `/buyer/signup` }>
                            <div className="flex pt-2">
                                <OrderIcon /> 
                                <p className="pl-2">Orders</p> 
                            </div>
                    </Link>
                </p>
                <p className="text-body-medium mdl:text-body-small text-surface-onVariant flex items-left justify-left">
                    <Link
                        className="tracking-[.1px]"
                        to={ `/buyer/signup` }>
                            <div className="flex pt-2">
                                <InboxIcon /> 
                                <p className="pl-2">Inbox</p> 
                            </div>
                    </Link>
                </p>
                <p className="text-body-medium mdl:text-body-small text-surface-onVariant flex items-left justify-left">
                    <Link
                        className="tracking-[.1px]"
                        to={ `/buyer/signup` }>
                            <div className="flex pt-2">
                                <SavedIcon /> 
                                <p className="pl-2">Saved Icon</p> 
                            </div>
                    </Link>
                </p>
                <p className="text-body-medium mdl:text-body-small text-surface-onVariant flex items-left justify-left">
                    <Link
                        className="tracking-[.1px]"
                        to={ `/buyer/signup` }>
                            <div className="flex pt-2">
                                <PendingReviewIcon /> 
                                <p className="pl-2">Pending Review</p> 
                            </div>
                    </Link>
                </p>
                <p className="text-body-medium mdl:text-body-small text-surface-onVariant flex items-left justify-left">
                    <Link
                        className="tracking-[.1px]"
                        to={ `/buyer/signup` }>
                            <div className="flex pt-2">
                                <SellerIcon /> 
                                <p className="pl-2">Followed Seller</p> 
                            </div>
                    </Link>
                </p>
                <div className="flex-1"></div>
                <p className="text-body-medium mdl:text-body-small text-surface-onVariant flex items-left justify-left">
                    <Link
                        className="tracking-[.1px]"
                        to={ `/buyer/signup` }> 
                            <div className="flex pt-2">
                                <LogoutIcon /> 
                                <p className="pl-2">Logout</p> 
                            </div>
                    </Link>
                </p>
                <p className="text-body-medium mdl:text-body-small text-surface-onVariant flex items-left justify-left">
                    <Link
                        className="tracking-[.1px]"
                        to={ `/buyer/signup` }>
                            <div className="flex pt-2">
                                <CloseAccountIcon /> 
                                <p className="pl-2">Close Account</p> 
                            </div>
                    </Link>
                </p>
            </div>
            
        </div>
        
        
    </div>
    
  )
}


export default SideBar