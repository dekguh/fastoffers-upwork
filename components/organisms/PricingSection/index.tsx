import React from 'react'
import ListPackage from '../../molecules/container/PricingSection/ListPackage'

const PricingSection : React.FC = () => {
    return (
        <div className='mt-20'>
            <div className='container mx-auto px-5 lg:px-10 xl:px-20'>
                <div className='text-center mb-12'>
                    <h2 className='text-gray-800 mb-8 text-5xl font-bold'>simple pricing.</h2>
                    <p className='text-gray-800 text-lg'>Only available for agents from the <span className='font-bold'>Greater Toronto Area</span></p>
                </div>

                <ListPackage />

                <div className='mt-5 text-center'>
                    <p className='text-gray-800 text-lg'>looking for a office wide solution? send an email to <span className='font-bold'>support@fastoffers.ca</span></p>
                </div>
            </div>
        </div>
    )
}

export default PricingSection
