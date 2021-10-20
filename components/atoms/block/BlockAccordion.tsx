import React from 'react'
import { Collapse } from 'react-collapse'
import { BsChevronUp } from 'react-icons/bs'
import { IBlockAccordion } from '../../utils/types'

const BlockAccordion : React.FC<IBlockAccordion> = ({ icon : Icon, title, description, isOpen, onClick }) => {
    return (
        <div>
            <div onClick={onClick} className={`bg-white rounded-full py-4 px-5 flex flex-row flex-nowrap items-center cursor-pointer duration-300 ${isOpen && 'shadow-primary'}`}>
                <div className='flex-grow-0 flex-shrink text-xl'>
                    <i>
                        <Icon />
                    </i>
                </div>

                <div className='flex-grow flex-shrink px-5'>
                    <h5 className='text-lg font-semibold text-gray-700'>{title}</h5>
                </div>

                <div>
                    <i>
                        <BsChevronUp className={`duration-300 transform ${isOpen ? 'rotate-0 text-link' : 'rotate-180'}`} />
                    </i>
                </div>
            </div>

            <Collapse isOpened={isOpen} theme={{collapse: 'relative left-0 right-0 duration-500', content: 'bar'}}>
                <p className='p-6 text-gray-800'>{description}</p>
            </Collapse>
        </div>
    )
}

export default BlockAccordion
