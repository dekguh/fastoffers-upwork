import React, { useState } from 'react'
import ButtonPrimary from '../../atoms/control/ButtonPrimary'
import { INavigation } from '../../utils/types'
import { BsArrowRightShort } from 'react-icons/bs'
import Link from 'next/link'
import NavList from '../../molecules/list/NavList'
import ButtonHamburger from '../../atoms/control/ButtonHamburger'
import useWindowScroll from '@react-hook/window-scroll'

const Navigation : React.FC<INavigation> = ({ classes, logo }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const scrollY = useWindowScroll(60)

    return (
        <div className={`${classes} ${scrollY >= 200 ? 'fixed top-0 left-0 right-0 bg-white shadow-primary' : 'relative'}`}>
            <div className='mx-auto px-4 lg:px-20'>
                <div className='flex flex-row flex-wrap lg:flex-nowrap'>
                    <div className='flex-grow flex-shrink'>
                        <img src={logo} alt='logo' />
                    </div>

                    <div className='hidden lg:block flex-grow-0 flex-shrink'>
                        <Link href='https://forms.ltd/login'>
                            <a>
                                <ButtonPrimary
                                    text='Login'
                                    icon={BsArrowRightShort}
                                />
                            </a>
                        </Link>
                    </div>

                    <div className='lg:hidden flex-grow-0 flex-shrink'>
                        <ButtonHamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                    </div>
                </div>
            </div>

            <div className={`nav-list block lg:hidden`}>
                <NavList
                    isOpen={isOpen}
                    dataMenu={[
                        {
                            text: 'Sign Up',
                            href: 'https://forms.ltd/register'
                        },
                        {
                            text: 'Sign In',
                            href: 'https://forms.ltd/login'
                        }
                    ]}
                />
            </div>
        </div>
    )
}

export default Navigation
