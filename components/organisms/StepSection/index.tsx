import React from 'react'
import StepLeft from '../../molecules/container/StepSection/StepLeft'
import StepRight from '../../molecules/container/StepSection/StepRight'

const StepSection : React.FC = () => {
    return (
        <div className='container mx-auto mt-24 px-4 lg:px-6 xl:px-20'>
            <div className='flex flex-col lg:flex-row flex-nowrap'>
                <StepLeft />
                <StepRight />
            </div>
        </div>
    )
}

export default StepSection
