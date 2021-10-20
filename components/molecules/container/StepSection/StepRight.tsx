import React, { useState } from 'react'
import BlockAccordion from '../../../atoms/block/BlockAccordion'
import { RiBarChartHorizontalFill } from 'react-icons/ri'
import { BiPencil } from 'react-icons/bi'
import { BsEnvelopeOpen } from 'react-icons/bs'

const StepRight : React.FC = () => {
    const [isOpen, setIsOpen] = useState<any>({
        accordion1: false,
        accordion2: false,
        accordion3: false
    })
    return (
        <div className='flex-grow-0 flex-shrink w-full lg:w-7/12 lg:pl-10 mt-5 lg:mt-0'>
            <div className='text-center mb-8'>
                <h3 className='text-gradient-green text-5xl font-bold'>3 simple steps</h3>
            </div>

            <div className='mb-4'>
                <BlockAccordion
                    onClick={() => setIsOpen({
                        accordion1: !isOpen.accordion1,
                        accordion2: false,
                        accordion3: false
                    })}
                    isOpen={isOpen.accordion1}
                    title='Step 1: Input your details to draft the offer'
                    icon={RiBarChartHorizontalFill}
                    description='Using our easy-to-use form, you simply enter the mls number, client’s name, offer price, closing date and click “Draft Offer Now”'
                />
            </div>

            <div className='mb-4'>
                <BlockAccordion
                    onClick={() => setIsOpen({
                        accordion1: false,
                        accordion2: !isOpen.accordion2,
                        accordion3: false
                    })}
                    isOpen={isOpen.accordion2}
                    title='Step 2: Download the offer and make adjustments'
                    icon={BiPencil}
                    description='In just 15 seconds you’ll be able to download a fully editable, fully filled out agreement with all the required forms in PDF format. You can then make any changes and adjustments quickly and easily right from your browser!'
                />
            </div>

            <div className='mb-4'>
                <BlockAccordion
                    onClick={() => setIsOpen({
                        accordion1: false,
                        accordion2: false,
                        accordion3: !isOpen.accordion3
                    })}
                    isOpen={isOpen.accordion3}
                    title='Step 3: Send it to your clients for e-signatures'
                    icon={BsEnvelopeOpen}
                    description='We’ve found a way to make sure you never have to manually drag & drop any more initials, signatures or dates. Our DocuSign templates will automatically place them in all the correct spots on your agreement! Fast Offers, Fast Signatures.'
                />
            </div>
        </div>
    )
}

export default StepRight
