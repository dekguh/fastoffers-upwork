import React from 'react'
import { ITextTitleBorder } from '../../utils/types'

const TextTitleBorder : React.FC<ITextTitleBorder> = ({ classes, text, textBordered }) => {
    return (
        <h2 className={`${classes} font-bold text-5xl lg:text-7xl text-gray-800`}>
            {text} <div className='text-bordered'>
                <span className='text'>{textBordered}</span>
                <span className='bordered'></span>
            </div>
        </h2>
    )
}

export default TextTitleBorder
