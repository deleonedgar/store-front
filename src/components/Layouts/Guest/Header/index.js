import React from "react";
import { logo } from '../../../Images'
import './style.scss';

function Header () {
    return (
        <div className='guest-header container-box'>
            <header>
                <img src={logo} alt='shopindo-logo' />
            </header>
        </div>
    )
}

export default Header
