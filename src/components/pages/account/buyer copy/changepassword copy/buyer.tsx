import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Buyer = () => {
  // Event handler to prevent arrow keys from changing the code input value


  return (
    <>
      <div className="px-6 pb-10 sm:px-6 mdl:shadow-md mdl:p-[36px] mdl:bg-white mdl:w-full">
        <h2 className="text-lg text-center">Security Verification</h2>

        <div className="mdl:grid">
          <div className="py-4 relative before:absolute before:w-full before:h-[1px] before:bg-outline-variant before:left-0 before:top-[7.5px] mdl:row-start-1">
            <p className="relative z-10 max-w-[max-content] mx-auto text-body-small text-surface-onVariant px-4 bg-white dark:bg-darkScheme"></p>
          </div>
          <div>
            <h2 className="text-lg text-center" style={{ fontSize: '16px' }}>We will send a one-time verification code to your email.</h2>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center">
            <label htmlFor="fullName">Email Address</label>
            <div className="relative">
              <input type="text" value="johnjoe@gmail.com" className="w-80 rounded-lg !important" style={{ borderRadius: '3px', borderColor: '#ddd' }} />
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center">
            <label htmlFor="fullName">Verification Code</label>
            <div className="relative">
              <div className="relative">
                <input
                  type="text" // Use type "text"
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                      e.preventDefault();
                    }
                  }}
                  onInput={(e) => {
                    if (e.target instanceof HTMLInputElement) {
                      e.target.value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                    }
                  }}
                  className="w-80 rounded-lg !important" style={{ borderRadius: '3px', borderColor: '#ddd' }}/>
                <div className="absolute top-0 right-0 h-full flex items-center pr-2 cursor-pointer" style={{ color: 'blue' }}>Send</div>
              </div>
            </div>
          </div>
          {/* Save button */}
          <div className= "m-8" style={{ textAlign: 'center' }}>
              <Link to="/buyer/account/passwordverify" style={{ color: "white", fontSize: "13px" }}>
              <button className="w-80 bg-red-500 text-white rounded-lg px-3 py-2 hover:bg-red-600 ">
                  Verify
                </button>
              </Link> 
            </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Buyer;
