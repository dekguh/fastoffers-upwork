import React from 'react'
import { ITextTitleBorderAnim } from '../../utils/types'

const TextTitleBorderAnim : React.FC<ITextTitleBorderAnim> = ({ classes, text, textBordered }) => {
    return (
        <h2 className={`${classes} font-bold text-4xl sm:text-8xl md:text-5xl lg:text-7xl text-gray-800`}>
            {text} <div className='text-bordered'>
                <span className='text'>{textBordered}</span>
                <span className='bordered-white-anim'></span>
            </div>
        </h2>
    )
}

export default TextTitleBorderAnim
