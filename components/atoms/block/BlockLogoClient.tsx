import React from 'react'
import { IBlockLogoClient } from '../../utils/types'

const BlockLogoClient : React.FC<IBlockLogoClient> = ({ logo, classes }) => {
    return (
        <img src={logo} alt='client' className={`block-logo-client w-28 sm:w-32 md:w-44 lg:w-48 mx-auto ${classes}`} />
    )
}

export default BlockLogoClient
