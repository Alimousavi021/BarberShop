import React, { useRef } from 'react'
import Bg from '../assets/img/aboutbg.png'
import Bg2 from '../assets/img/about.png'

const AboutBg = ({h3}) => {

  return (

    <section className='w-full h-[750px] flex sticky mt-20'>
      <figure className='w-full h-full relative'>
        <img className='w-full h-full' src={Bg} alt="" />
        <article className='absolute left-0 top-0 w-full h-full flex flex-wrap'>
          <div className='font-melo w-full h-[50%] md:h-full md:w-[50%] flex flex-wrap justify-center items-center'>
            <div className='font-melo h-[70%] w-[80%] flex flex-wrap '>
              <div ref={h3} className='font-melo w-full h-[40%] md:mt-16  overflow-hidden'>
                <h3 className='duration-[2s] translate-y-[200px]    w-full h-[30%] overflow-hidden text-white text-xl md:text-[50px] mt-2 font-melo flex justify-start items-center ps-6'>We Revive The</h3>
                <h3 className='duration-[2s] translate-y-[200px]    w-full h-[30%] overflow-hidden text-white text-xl md:text-[50px] mt-2 font-melo flex justify-start items-center ps-6'>Traditions of The classic</h3>
                <h3 className='duration-[2s] translate-y-[200px]    w-full h-[30%] overflow-hidden text-white text-xl md:text-[50px] mt-2 font-melo flex justify-start items-center ps-6'>men’s Hair Cut</h3>
              </div>
              <p className='w-full h-[30%] text-[#cecec9] text-[10px] md:text-[16px] font-serif flex justify-start items-center ps-6'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi</p>
              <button className='bg-inherit ms-6 cursor-pointer w-[140px] h-[60px] border-[2px] border-[#dbc19ba4] font-melo text-white'>About Us</button>
            </div>
          </div>
          <div className='w-full h-[50%] md:h-full md:w-[50%] flex justify-center'>
            <figure className='h-[95%] w-[80%] flex justify-center items-center mt-6'>
              <img className='w-full h-full' src={Bg2} alt="" />
            </figure>
          </div>
        </article>
      </figure>

    </section>
  )
}

export default AboutBg