import React from 'react'
import { IMouseEffectCarousel } from '../../utils/types'
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go'

const MouseEffectCarousel : React.FC<IMouseEffectCarousel> = ({ top, left,  classes }) => {
    return (
        <div
            className={`mouse-effect-carousel pointer-events-none fixed rounded-full bg-optional h-12 w-12 transform -translate-x-2/4 -translate-y-2/4 z-50 ${classes}`}
            style={{
                top: `${top}px`,
                left: `${left}px`
            }}
            id='mouseEffectCarouselId'
        >
            <span className='absolute z-20 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-white text-xs'>drag</span>

            <span className='mouse-effect-carousel-arrow z-10 triangle-left'>
                <i><GoTriangleLeft /></i>
            </span>

            <span className='mouse-effect-carousel-arrow z-10 triangle-right'>
                <i><GoTriangleRight /></i>
            </span>
        </div>
    )
}

export default MouseEffectCarousel
