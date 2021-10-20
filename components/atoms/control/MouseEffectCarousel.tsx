import React from 'react'
import { IMouseEffectCarousel } from '../../utils/types'

const MouseEffectCarousel : React.FC<IMouseEffectCarousel> = ({ top, left,  classes }) => {
    return (
        <div
            className={`mouse-effect-carousel pointer-events-none fixed rounded-full bg-optional h-12 w-12 transform -translate-x-2/4 -translate-y-2/4 z-50 ${classes}`}
            style={{
                top: `${top}px`,
                left: `${left}px`
            }}
        >
            <span className='absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-white text-xs'>drag</span>
        </div>
    )
}

export default MouseEffectCarousel
