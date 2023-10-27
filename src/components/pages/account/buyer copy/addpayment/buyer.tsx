import React from 'react';
import { Link } from 'react-router-dom';

const Buyer = () => {
  return (
    <>
      <div className="px-6 pb-10 sm:px-6 mdl:shadow-md mdl:p-[36px] mdl:bg-white mdl:w-full">
        <h2 className="text-lg">Add Payment Method</h2>

        <div className="mdl:grid">
            <div className="py-4 relative before:absolute before:w-full before:h-[1px] before:bg-outline-variant before:left-0 before:top-[7.5px] mdl:row-start-1">
                <p className="relative z-10 max-w-[max-content] mx-auto text-body-small text-surface-onVariant px-4 bg-white dark:bg-darkScheme"></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                <label htmlFor="fullName">Card Number</label>
                <br />
                <div className="relative">
                    <input type="number"  className="w-80 rounded-lg !important" style={{ borderRadius: '3px', borderColor: '#ddd' }} />
                </div>
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                <label htmlFor="fullName">Card Name</label>
                <div className="relative">
                    <input type="text"  className="w-80 rounded-lg !important" style={{ borderRadius: '3px', borderColor: '#ddd' }} />
                </div>
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                <label htmlFor="fullName">Expiration Date (MM/YY)</label>
                <div className="relative">
                    <input
                    type="text"
                    placeholder="MM/YY"
                    pattern="\d{2}/\d{2}"
                    maxLength={5}
                    title="Please enter a valid MM/YY format (e.g., 01/23)"
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value.length === 2 && !value.includes('/')) {
                        e.target.value = value + '/';
                        } else if (value.length === 3 && value.charAt(2) !== '/') {
                        e.target.value = value.substring(0, 2) + '/' + value.charAt(2);
                        }
                    }}
                    />
                </div>
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                <label htmlFor="birthday">CVV</label>
                <div className="relative">
                    <input type="number"  className="w-80 rounded-lg !important" style={{ borderRadius: '3px', borderColor: '#ddd' }} />
                </div>
                </div>
            </div>
            <br />
        {/* Change Password */}
            <Link to="/buyer/account" style={{ color: "white", fontSize: "13px" }}>
                <button className="w-72 bg-red-500 text-white rounded-lg px-3 py-2 hover:bg-red-600">Cancel</button>
            </Link>
        
        <br />
        {/* Save button */}
        <button className="w-72 bg-red-500 text-white rounded-lg px-3 py-1 hover:bg-red-600">Confirm</button>
        </div>
      </div>
      <br />
    </>
  );
};

export default Buyer;
