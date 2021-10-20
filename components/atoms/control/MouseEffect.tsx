import useMouse from '@react-hook/mouse-position'
import React, { useRef } from 'react'
import { IMouseEffect } from '../../utils/types'

const MouseEffect : React.FC<IMouseEffect> = ({ children }) => {
    const target = useRef(null)
    const mouse = useMouse(target, {
        fps: Infinity,
        enterDelay: 100,
        leaveDelay: 100
    })

    return (
    <>
        <div ref={target} className='mouse-effect-wrapper'>
            {children}
            <div
                className='mouse-effect pointer-events-none rounded-full h-3 w-3 fixed z-40 transform -translate-x-2/4 -translate-y-2/4'
                style={{
                    left: `${mouse.clientX}px`,
                    top: `${mouse.clientY}px`
                }}
            ></div>
        </div>
    </>
    )
}

export default MouseEffect
