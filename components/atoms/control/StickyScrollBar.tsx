import useWindowScroll from '@react-hook/window-scroll'
import React, { useState, useEffect } from 'react'
import { calPercentOf } from '../../utils/other'

const StickyScrollBar : React.FC = () => {
    const scrollY = useWindowScroll(60)
    const [pageHeight, setPageHeight] = useState<number>(0)

    useEffect(() => {
        setPageHeight(document.documentElement.offsetHeight)
    }, [])

    return (
        <div className='fixed top-2/4 right-9 z-50 transform -translate-x-2/4'>
            <div>
                <span className='absolute transform -rotate-90 -top-9 left-2/4 -translate-x-2/4 text-sm text-gray-800'>scroll</span>
            </div>
            <div className='relative h-20 bg-gray-800' style={{ width: '1px' }}>
                <div
                    className='rounded-full bg-gray-800 h-2 w-2 absolute left-2/4 transform -translate-x-2/4 -translate-y-2/4'
                    style={{
                        top: `${calPercentOf(scrollY, pageHeight)}%`
                    }}
                >
                </div>
            </div>
        </div>
    )
}

export default StickyScrollBar
