import React from 'react'

const HomeHeroRight : React.FC = () => {
    return (
        <div className='lg:pl-10 flex-grow-0 flex-shrink w-full lg:w-6/12 xl:w-6/12 2xl:w-7/12'>
            <div>
                <img
                    className='relative z-10 max-w-full xl:max-w-3xl mx-auto w-full anim-bounce-image'
                    src="/header-cartoon.png"
                    alt="cartoon header"
                />
            </div>

        </div>
    )
}

export default HomeHeroRight
