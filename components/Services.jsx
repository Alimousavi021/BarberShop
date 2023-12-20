import React from 'react'
import Card from './Card'
import Title from './Title'
import im1 from '../assets/img/im1.png'
import im2 from '../assets/img/im2.png'
import im3 from '../assets/img/im3.png'

const Services = ({titr,card1,card2,card3}) => {
  return (
    <section className='w-full h-[750px] bg-[#201f1f] sticky flex flex-wrap justify-center'>
      <Title titr={titr} title={'Our Services'} />
      <div className='w-[90%] h-[60vh] font-melo flex flex-wrap justify-center items-center'>
        <Card card={card1} img={im1} title={'Makeup'} />
        <Card card={card2} img={im2} title={'Skin Care'} />
        <Card card={card3} img={im3} title={'Waxing'} />

      </div>
      <div className='font-melo w-full flex justify-center items-center'>
        <button className='bg-inherit ms-6 cursor-pointer w-[150px] h-[55px] border-[2px] border-[#dbc19ba4] font-melo text-white'>View More</button>
      </div>
    </section>
  )
}

export default Services