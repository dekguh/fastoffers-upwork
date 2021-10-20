import React from 'react'
import ButtonSecondary from '../../../atoms/control/ButtonSecondary'
import TextTitleBorderAnim from '../../../atoms/text/TextTitleBorderAnim'
import { BsArrowRightShort } from 'react-icons/bs'

const FooterLeft : React.FC = () => {
    return (
        <div className='flex-grow-0 flex-shrink w-full md:w-6/12'>
            <div className='mt-8 w-full lg:w-8/12 xl:w-6/12'>
                <TextTitleBorderAnim
                    text='start your'
                    textBordered='free trial.'
                    classes='text-center md:text-left'
                />

                <p className='text-white leading-relaxed my-5 text-center md:text-left'>draft offers faster than ever before</p>

                <div className='text-center md:inline-block'>
                    <ButtonSecondary
                        text="CLICK HERE TO BEGIN"
                        icon={BsArrowRightShort}
                        classes='py-4 px-14 rounded-full text-lg'
                    />

                    <p className='text-xs mt-3 text-center'>
                        totally <span className='font-bold'>free for 30 days</span>. No credit card required.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FooterLeft
