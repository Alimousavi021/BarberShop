import React from 'react'
import A from '../assets/img/barber.png'
import '../assets/master.css'
import shape from '../assets/img/shape.png'

const Hero = () => {
    return (
        <section className='w-full sticky left-0 top-0 flex justify-center items-center'>
            <div className='border border-[#dbc19ba4] w-[90%] h-[90%] relative border-t-0'>
                <img src={shape} alt="" className='absolute bottom-0 left-0  shape-anim' />
                <img src={shape} alt="" className='absolute top-0 right-0  shape-anim2' />
                <figure className=' flex justify-center mt-10'>
                    <img src={A} alt="" />
                </figure>
                <p className=' text-black text-center text-6xl md:text-8xl font-melo'>Always Make Room <br /> For Beauty In <br />Your life</p>
                <p className=' text-[#5d5d59] text-center text-[18px] font-serif '>Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque <br /> Laudantiumeaque Ipsa Quae Ab Illo Inventore</p>
                <div className='w-full flex justify-center mt-4'>
                    <button className=' flex justify-center items-center w-[160px] h-[50px] bg-[#d3ad74a4] text-black font-melo'>Reserve Now</button>

                </div>
            </div>

        </section>
    )
}

export default Hero