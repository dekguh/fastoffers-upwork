import React from 'react'
import { IBlockPricing } from '../../utils/types'
import { AiOutlineCheck } from 'react-icons/ai'
import Link from 'next/link'

const BlockPricing : React.FC<IBlockPricing> = ({ title, price, date, description, listBenefit, buttonText, buttonUrl = '#', isGreen }) => {
    return (
        <div className={`border duration-300 relative top-0 hover:-top-2 ${isGreen ? 'border-primary bg-primary' : 'border-gray-200 bg-white'}`}>
            <div className='p-6 md:p-14'>
                <h5 className={`font-bold text-sm tracking-widest ${isGreen ? 'text-white' : 'text-gray-800'}`}>{title}</h5>
                <div className='flex flex-row flex-nowrap my-4 items-baseline'>
                    <span className='text-5xl font-bold mr-1'>{price}</span>
                    <span className='text-gray-500'>/{date}</span>
                </div>

                {description && <p className='text-lg text-gray-800 mb-7'>{description}</p>}

                <ul className='last:mb-0'>
                    {listBenefit && listBenefit.map((data, i) => (
                        <li className='mb-1 flex flex-row flex-nowrap' key={i}>
                            <span className='mr-2'>
                                <i className={`text-lg mr-3 ${isGreen ? 'text-white' : 'text-primary'}`}><AiOutlineCheck /></i>
                            </span>
                            <span className={`text-gray-800 ${i == 0 && 'font-bold uppercase'}`}>{data.text}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='p-6 border-t border-gray-200 text-center'>
                <Link href={buttonUrl}>
                    <a className={`font-bold text-sm duration-300 ${isGreen ? 'text-white' : 'hover:text-primary'}`}>{buttonText}</a>
                </Link>
            </div>
        </div>
    )
}

export default BlockPricing
