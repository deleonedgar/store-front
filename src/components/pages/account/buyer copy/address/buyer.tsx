import { Link } from "react-router-dom"
import { WriteIcon } from "@/components/shared/icons/write"


const Buyer = () =>{
  return (
    <>
    <div className="px-6 pb-10 sm:px-6 mdl:shadow-md mdl:p-[36px] mdl:bg-white mdl:w-full">
        <h2 className="text-lg">Address Book</h2>
        
        <div className="mdl:grid">
            <div className="py-4 relative before:absolute before:w-full before:h-[1px] before:bg-outline-variant before:left-0 before:top-[7.5px] mdl:row-start-1">
                <p className="relative z-10 max-w-[max-content] mx-auto text-body-small text-surface-onVariant px-4 bg-white dark:bg-darkScheme"></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <div className="max-w-xl border rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="text-sm mb-2">Account Details</div>
                            <div className="border-b mb-2"></div> {/* Line separator */}
                            <div className="text-gray-700 text-base">
                            <p className="text-xs">John Joe</p>
                            <p className="text-xs">johnjoe@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <div className="max-w-xl border rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="text-sm mb-2 flex">
                                <span>Delivery Address</span>
                                <span className="ml-auto">
                                    <Link
                                        className="tracking-[.1px]"
                                        to={ `/buyer/account/address` }> 
                                        <WriteIcon />
                                    </Link>
                                </span>
                            </div>
                            <div className="border-b mb-2"></div> {/* Line separator */}
                            <div className="text-gray-700 text-base">
                            <p className="text-xs">Your default delivery details:</p>
                            <p className="text-xs">etc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br />
    </>
  )
}


export default Buyer