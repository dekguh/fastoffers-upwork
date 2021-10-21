import React from 'react'
import { IButton } from '../../utils/types'

const ButtonFlipped : React.FC<IButton> = ({ classes, text, onClick, icon : Icon }) => {
    return (
    <div className="button button--flip text-left">
        <div className="btn button__face">
            <button className={`button-secondary ${classes}`} onClick={onClick}>
                <div className='flex flex-row flex-nowrap items-center'>
                    <span className='button-text font-bold'>{text}</span>
                    <span className='button-icon'>
                        <i className='text-lg'><Icon /></i>
                    </span>
                </div>
            </button>
        </div>
        <div className="btn button__top">
            <button className={`button-secondary ${classes}`} onClick={onClick}>
                <div className='flex flex-row flex-nowrap items-center'>
                    <span className='button-text font-bold'>{text}</span>
                    <span className='button-icon'>
                        <i className='text-lg'><Icon /></i>
                    </span>
                </div>
            </button>
        </div>
    </div>
    )
}

export default ButtonFlipped
