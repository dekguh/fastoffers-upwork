import React from 'react'
import ClientList from '../../molecules/container/TrustedSection/ClientList'
import { dataLogo } from '../../utils/data'

const TrustedSection : React.FC = () => {
    return (
        <div className='mt-20'>
            <div className='container mx-auto px-5 lg:px-10 xl:px-20'>
                <h5 className='mb-2 text-gray-800 text-xl text-center'>Trusted by top performers at:</h5>

                <ClientList
                    dataLogo={dataLogo}
                />
            </div>
        </div>
    )
}

export default TrustedSection
