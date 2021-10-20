import React, { useState } from 'react'
import { IButtonHamburger } from '../../utils/types'

const ButtonHamburger : React.FC<IButtonHamburger> = ({ isOpen, onClick }) => {
    return (
        <button onClick={onClick}>
            <div className={`hamburger ${isOpen && 'active'}`}>
                <span className='bars-1'></span>
                <span className='bars-2'></span>
                <span className='bars-3'></span>

                <span className='bars-close-1'></span>
                <span className='bars-close-2'></span>
            </div>
        </button>
    )
}

export default ButtonHamburger
