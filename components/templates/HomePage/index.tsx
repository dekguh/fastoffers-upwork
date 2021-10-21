import React, { useEffect } from 'react'
import MouseEffect from '../../atoms/control/MouseEffect'
import StickyScrollBar from '../../atoms/control/StickyScrollBar'
import Footer from '../../organisms/Footer'
import HomeHero from '../../organisms/HomeHero'
import PricingSection from '../../organisms/PricingSection'
import StepSection from '../../organisms/StepSection'
import TrustedSection from '../../organisms/TrustedSection'
import TryoutSection from '../../organisms/TryoutSection'
import { Helmet } from 'react-helmet'

const HomePage = () => {
    useEffect(() => {
        const script1 = document.createElement('script');
        script1.src = "https://code.evidence.io/js/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjQ5N30.bOu4KGNzZ0WNsXbQzGgwwRZe_tJjfFC1rK9BRpYvXv0";
        script1.async = true;

        const script2 = document.createElement('script');
        script2.src = "//embed.typeform.com/next/embed.js";
        script2.async = true;

        document.body.appendChild(script1);
        document.body.appendChild(script2);
    }, [])
    return (
    <>
        <Helmet>
            <title>FastOffers - draft full real estate offers in a minute</title>
            <script src='/chat.js' async></script>
        </Helmet>

        <MouseEffect>
            <div className='bg-bordered-wrap'>
                <HomeHero />

                <StepSection />

                <TryoutSection />

                <TrustedSection />

                <PricingSection />

                <Footer />
            </div>

            <StickyScrollBar />
        </MouseEffect>
    </>
    )
}

export default HomePage
