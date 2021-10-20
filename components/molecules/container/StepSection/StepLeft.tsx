import React from 'react'
import TextTitleBorder from '../../../atoms/text/TextTitleBorder'

const StepLeft : React.FC = () => {
    return (
        <div className='flex-grow-0 flex-shrink w-full lg:w-5/12'>
            <TextTitleBorder
                text='draft a full real estate offer in a'
                textBordered='minute'
                classes='mb-7'
            />

            <p className='leading-relaxed mb-3 text-lg'>
                We know that in real estate, every minute counts. Our FastOffers system
                saves you time by assembling the initial offer for you with just a few clicks!
            </p>

            <p className='leading-relaxed mb-3 text-lg'>
                We have designed this system specifically for the needs of real estate
                agents – so you can spend less time drafting offers and more time closing
                deals!
            </p>
        </div>
    )
}

export default StepLeft
