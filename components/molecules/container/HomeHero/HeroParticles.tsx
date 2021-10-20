import React from 'react'
import Particles from 'react-tsparticles'

const HeroParticles = () => {
    const particlesInit = (main : any) => null;

    const particlesLoaded = (container : any) => null;

    return (
    <Particles
        className='absolute top-0 left-0 right-0 bottom-0'
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            background: {
            color: {
                value: "transparent",
            },
            },
            fpsLimit: 60,
            interactivity: {
            detectsOn: "canvas",
            events: {
                onClick: {
                enable: false,
                mode: "push",
                },
                onHover: {
                enable: false,
                mode: "repulse",
                },
                resize: false,
            },
            modes: {
                bubble: {
                    distance: 5,
                    duration: 20,
                    opacity: 0.9,
                    size: 90,
                },
                push: {
                    quantity: 1,
                },
                repulse: {
                distance: 200,
                duration: 0.4,
                },
            },
            },
            particles: {
            color: {
                value: "#40D8A1",
            },
            links: {
                color: "transparent",
                distance: 20,
                enable: false,
                opacity: 0.9,
                width: 1,
            },
            collisions: {
                enable: false,
            },
            move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                enable: true,
                value_area: 800,
                },
                value: 10,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                random: false,
                value: 8,
            },
            },
            detectRetina: true,
        }}
    />
    )
}

export default HeroParticles
