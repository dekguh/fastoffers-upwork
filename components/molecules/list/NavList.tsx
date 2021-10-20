import React from 'react'
import Link from 'next/link'
import { INavList } from '../../utils/types'
import {Collapse} from 'react-collapse'

const NavList : React.FC<INavList> = ({ isOpen, dataMenu }) => {
    return (
        <Collapse isOpened={isOpen} theme={{collapse: 'absolute left-0 right-0 duration-500', content: 'bar'}}>
            <ul className='mt-2 z-20 bg-white shadow-primary p-5'>
                {dataMenu && dataMenu.map((data, i) => (
                    <li className='mb-4' key={i}>
                        <Link href={data.href}>
                            <a>{data.text}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Collapse>
    )
}

export default NavList
