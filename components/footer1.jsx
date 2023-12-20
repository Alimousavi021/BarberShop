import React from 'react'
import shape from '../assets/img/shape.png'

const footer1 = ({ foot1, foot2, foot3, dokme }) => {
    return (
        <section className='sticky h-[750px] w-full bg-[#f5e8d5] flex justify-center items-center '>
            <div className='border border-[#dbc19ba4] w-[90%] h-[90%] relative flex justify-center items-center'>
                <img src={shape} alt="" className='absolute bottom-0 left-0  shape-anim' />
                <img src={shape} alt="" className='absolute top-0 right-0  shape-anim2' />

                <div className='  w-[60%] h-[75%] flex justify-center content-center flex-wrap'>
                    <div className='  w-full overflow-hidden'>
                        <h3 ref={foot1} className='duration-1000 translate-y-[100px] font-melo text-black text-3xl md:text-8xl w-full flex justify-center  '>Feel Free To</h3>
                    </div>
                    <div className='  w-full overflow-hidden'>
                        <h3 ref={foot2} className='duration-1000 translate-y-[100px] font-melo text-black text-3xl md:text-8xl w-full flex justify-center  '>Contact With Us For</h3>
                    </div>
                    <div className='  w-full overflow-hidden'>
                        <h3 ref={foot3} className='duration-1000 translate-y-[100px] font-melo text-black text-3xl md:text-8xl w-full flex justify-center  '>Your Better Look</h3>
                    </div>
                    <div className='w-full flex justify-center mt-8  overflow-hidden'>
                        <button ref={dokme} className='duration-1000 translate-y-[100px] flex justify-center items-center w-[160px] h-[50px] bg-[#d3ad74a4] text-black font-melo'>Reserve Now</button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default footer1