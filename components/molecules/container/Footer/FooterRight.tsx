import React from 'react'

const FooterRight : React.FC = () => {
    return (
        <div className='flex-grow-0 flex-shrink w-6/12 hidden md:block'>
            <img
                className='w-full max-w-sm mx-auto relative anim-bounce-image -mt-32'
                src="/cartoon-footer.png"
                alt="cartoon footer"
            />
        </div>
    )
}

export default FooterRight
