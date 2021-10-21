import React from 'react'
import { IFooterBottom } from '../../../utils/types'

const FooterBottom : React.FC<IFooterBottom> = ({ logo, copyright }) => {
    return (
        <div className='py-5'>
            <img src={logo} alt="logo" className='mx-auto' />

            {copyright && (
            <div className='text-white text-center mt-4 text-sm'>
                {copyright}
            </div>)}
        </div>
    )
}

export default FooterBottom
