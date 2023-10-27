import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Buyer = () => {
  return (
    <>
      <div className="px-6 pb-10 sm:px-6 mdl:shadow-md mdl:p-[36px] mdl:bg-white mdl:w-full">
        <div className="flex justify-between items-center">
            <h2 className="text-lg">Edit Account Details</h2>
            <Link to="/buyer/account" style={{ color: "red", fontSize: "13px" }}>
                <button className="tracking-[.1px]">
                <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            </Link>
        </div>

        <div className="mdl:grid">
            <div className="py-4 relative before:absolute before:w-full before:h-[1px] before:bg-outline-variant before:left-0 before:top-[7.5px] mdl:row-start-1">
                <p className="relative z-10 max-w-[max-content] mx-auto text-body-small text-surface-onVariant px-4 bg-white dark:bg-darkScheme"></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                <label htmlFor="fullName">Full Name</label>
                <br />
                <div className="relative">
                    <input type="text" value="John Joe" className="w-80 rounded-lg !important" style={{ borderRadius: '3px', borderColor: '#ddd' }} />
                </div>
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                <label htmlFor="fullName">Email Address</label>
                <span> | </span>
                <Link
                    className="tracking-[.1px]"
                    to="/buyer/account/emailaddress"
                    style={{ color: "red", fontSize: "13px" }}
                >
                    Change
                </Link>
                <br />
                <div className="relative">
                    <input type="text" value="johnjoe@gmail.com" className="w-80 rounded-lg !important" style={{ borderRadius: '3px', borderColor: '#ddd' }} />
                </div>
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                <label htmlFor="fullName">Phone Number</label>
                <span> | </span>
                <Link
                    className="tracking-[.1px]"
                    to="/buyer/account/editaccount"
                    style={{ color: "red", fontSize: "13px" }}
                >
                    Change
                </Link>
                <br />
                <div className="relative">
                    <input type="text" value="09061040175" className="w-80 rounded-lg !important" style={{ borderRadius: '3px', borderColor: '#ddd' }} />
                </div>
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                <label htmlFor="birthday">Birthday</label>
                <br />
                <div className="relative">
                    {/* Birthday input field */}
                    <select id="day" className="w-18 rounded-lg" style={{ borderRadius: '3px', borderColor: '#ddd' }}>
                    <option value="" disabled>Day</option>
                    {Array.from({ length: 31 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                    </select>
                    <select id="month" className="w-32 ml-2 rounded-lg" style={{ borderRadius: '3px', borderColor: '#ddd' }}>
                    <option value="" disabled>Month</option>
                    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                        <option key={index + 1} value={index + 1}>{month}</option>
                    ))}
                    </select>
                    <select id="year" className="w-24 ml-2 rounded-lg" style={{ borderRadius: '3px', borderColor: '#ddd' }}>
                    <option value="" disabled>Year</option>
                    {Array.from({ length: 100 }, (_, i) => {
                        const year = new Date().getFullYear() - i;
                        return (
                        <option key={year} value={year}>{year}</option>
                        );
                    })}
                    </select>
                </div>
                </div>
            </div>
            <br />
        {/* Change Password */}
            <Link to="/buyer/account/changepassword" style={{ color: "white", fontSize: "13px" }}>
                <button className="w-72 bg-red-500 text-white rounded-lg px-3 py-2 hover:bg-red-600">Change Password</button>
            </Link>
        
        <br />
        {/* Save button */}
        <button className="w-72 bg-red-500 text-white rounded-lg px-3 py-1 hover:bg-red-600">Save Changes</button>
        </div>
      </div>
      <br />
    </>
  );
};

export default Buyer;
