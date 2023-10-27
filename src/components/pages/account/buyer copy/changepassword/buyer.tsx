import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Buyer = () => {
  return (
    <>
      <div className="px-6 pb-10 sm:px-6 mdl:shadow-md mdl:p-[36px] mdl:bg-white mdl:w-full">
        <h2 className="text-lg text-center">Security Verification</h2>

        <div className="mdl:grid">
            <div className="py-4 relative before:absolute before:w-full before:h-[1px] before:bg-outline-variant before:left-0 before:top-[7.5px] mdl:row-start-1">
                <p className="relative z-10 max-w-[max-content] mx-auto text-body-small text-surface-onVariant px-4 bg-white dark:bg-darkScheme"></p>
            </div>
            <div>
                <img style={{height:"120px",position:"relative",left:"38%"}} src="/src/assets/images/shield.png" alt="" />
                <h2 className="text-lg text-center" style={{fontSize:"14px"}}>To protect your account security, we need to verify your identity <br /> Please choose a way to verify:</h2>
            </div> 
            {/* Save button */}
            <div className= "m-14" style={{ textAlign: 'center' }}>
              <Link to="/buyer/account/passwordverify" style={{ color: "white", fontSize: "13px" }}>
              <button className="w-96 border text-black px-3 py-1 " style={{ border: "1px solid #595f6d", fontSize: "14px" }}>
                  <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
                  Email Verification
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
