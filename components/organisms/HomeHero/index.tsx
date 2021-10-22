import React from 'react'
import HeroParticles from '../../molecules/container/HomeHero/HeroParticles'
import HomeHeroLeft from '../../molecules/container/HomeHero/HomeHeroLeft'
import HomeHeroRight from '../../molecules/container/HomeHero/HomeHeroRight'
import Navigation from '../Navigation'

const HomeHero : React.FC = () => {
    return (
        <div className='relative'>
            <Navigation
                logo='/logo-2.png'
                classes='py-5 z-30'
            />

            <img src='/header-shape-full.png' className='absolute top-0 right-0 md:max-w-xl xl:max-w-4xl h-28 md:h-72 lg:h-auto' />
            <div className='relative z-10 px-5 lg:px-28 xl:px-44 mx-auto flex flex-row flex-wrap lg:flex-nowrap items-center'>
                <HomeHeroLeft />
                <HomeHeroRight />
            </div>
            <HeroParticles />
        </div>
    )
}

export default HomeHero
