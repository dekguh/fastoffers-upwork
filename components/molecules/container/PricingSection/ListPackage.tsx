import React from 'react'
import BlockPricing from '../../../atoms/block/BlockPricing'

const ListPackage : React.FC = () => {
    return (
        <div className='flex flex-col md:flex-row flex-nowrap'>
            <div className='flex-grow-0 flex-shrink w-full md:w-6/12 mb-5 md:mb-0'>
                <BlockPricing
                    title='AGENT YEARLY PLANT'
                    price='$120'
                    date='year'
                    description='Save 17% by getting our yearly plan'
                    listBenefit={[
                        {
                            text: 'unlimited offers'
                        },
                        {
                            text: 'DocuSign E-Signature Templates'
                        },
                        {
                            text: 'Customizable Standard Schedule A'
                        },
                        {
                            text: 'Team Support'
                        }
                    ]}
                    buttonText='SIGN UP NOW'
                    buttonUrl='https://forms.ltd/register'
                />
            </div>

            <div className='flex-grow-0 flex-shrink w-full md:w-6/12'>
                <BlockPricing
                    title='AGENT MONTHLY PLANT'
                    price='$12'
                    date='month'
                    listBenefit={[
                        {
                            text: 'unlimited offers'
                        },
                        {
                            text: 'DocuSign E-Signature Templates'
                        },
                        {
                            text: 'Customizable Standard Schedule A'
                        }
                    ]}
                    buttonText='START 30 DAY FREE TRIAL'
                    buttonUrl='https://forms.ltd/register'
                    isGreen={true}
                />
            </div>
        </div>
    )
}

export default ListPackage
