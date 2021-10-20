import React from 'react'
import { IButton } from '../../utils/types'

const ButtonSecondary : React.FC<IButton> = ({ classes, text, onClick, icon : Icon }) => {
    return (
        <button className={`button-secondary ${classes}`} onClick={onClick}>
            <div className='flex flex-row flex-nowrap items-center'>
                <span className='button-text font-bold'>{text}</span>
                <span className='button-icon'>
                    <i className='text-lg'><Icon /></i>
                </span>
            </div>
        </button>
    )
}

export default ButtonSecondary