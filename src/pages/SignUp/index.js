import React from 'react'
import './style.scss'
import Header from '../../components/Layouts/Header';

function SignUp() {
    return (
        <div>
            <Header />
            
            <div className='container-box bg-light auth-container grid grid-cols-2'>
                <div>col1</div>
                <div className='shadow-md border rounded form-container'>
                    <p className='text-headline-large text-on-surface'>Sign Up</p>
                </div>
            </div>
        </div>
    );
}
  
export default SignUp;