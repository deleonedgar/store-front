
import React from 'react';
import './style.scss';
import {Logo} from '../../../generics/Logo'
 

function Header() {
    return (
        <div className='guest-header container-box'>
            <header>
              <Logo/>
            </header>
        </div>
    )
}

export default Header
