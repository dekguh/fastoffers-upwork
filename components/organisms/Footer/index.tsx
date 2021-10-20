import React from 'react'
import FooterBottom from '../../molecules/container/Footer/FooterBottom'
import FooterLeft from '../../molecules/container/Footer/FooterLeft'
import FooterRight from '../../molecules/container/Footer/FooterRight'

const Footer = () => {
    return (
        <div className='bg-primary mt-20'>
            <svg className='transform rotate-180' fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 68" preserveAspectRatio="none">
                <path d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8" transform="translate(0-1977)"></path>
            </svg>

            <div className='container mx-auto px-5 lg:px-10 xl:px-20'>
                <div className='flex flex-row flex-nowrap'>
                    <FooterLeft />
                    <FooterRight />
                </div>

                <FooterBottom
                    logo='/logo-white.png'
                    copyright={(
                        <p>Have a question or need help? Send us an <a href="#">email</a>. © 2021 FastOffers.ca & <a href="#">Forms</a> LTD. | Privacy Policy  Made with ❤ in Toronto</p>
                    )}
                />
            </div>
        </div>
    )
}

export default Footer
