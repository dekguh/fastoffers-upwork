import useMouse from '@react-hook/mouse-position';
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import BlockLogoClient from '../../../atoms/block/BlockLogoClient';
import MouseEffectCarousel from '../../../atoms/control/MouseEffectCarousel';
import { IClientList } from '../../../utils/types';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 993 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1
    }
};

const ClientList : React.FC<IClientList> = ({ dataLogo }) => {
  const [isEnter, setIsEnter] = useState<boolean>(false)
  const ref = React.useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  return (
      <div
        ref={ref}
        onMouseEnter={() => {
          isEnter == false && setIsEnter(true)
        }}
        onMouseLeave={() => {
          isEnter == true && setIsEnter(false)
        }}
        className='overflow-hidden'
      >
          {isEnter && <MouseEffectCarousel top={mouse.clientY} left={mouse.clientX} classes={`${isEnter && 'active'}`} />}
          <Carousel
              responsive={responsive}
              infinite={true}
              draggable={true}
              autoPlay={true}
              autoPlaySpeed={1}
              ssr={true}
              transitionDuration={5000}
              arrows={false}
              sliderClass='items-center'
              centerMode={true}
          >
              {dataLogo && dataLogo.map((data, i) => (
                  <div key={i}>
                      <BlockLogoClient logo={data.logo} />
                  </div>
              ))}
          </Carousel>
      </div>
  )
}

export default ClientList
