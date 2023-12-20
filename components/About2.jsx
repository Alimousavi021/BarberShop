import React from 'react'
import Bg2 from '../assets/img/about.png'


const About2 = ({ttl,ttr,ttr2}) => {
    return (
        <section className='w-full h-[750px] bg-[#201f1f] flex sticky'>
            <article className='w-full h-full flex flex-wrap'>
                <div className='w-full h-[50%] md:h-full md:w-[50%] flex justify-center'>
                    <figure className='h-[95%] w-[80%] flex justify-center items-center mt-6'>
                        <img ref={ttl} className='w-full h-full duration-[2s] translate-x-[-500px] opacity-0' src={Bg2} alt="" />
                    </figure>
                </div>
                <div className='font-melo w-full h-[50%] md:h-full md:w-[50%] flex flex-wrap justify-center items-center'>
                    <div ref={ttr2} className='font-melo h-[70%] w-[80%] flex flex-wrap '>
                        <div ref={ttr} className='font-melo w-full h-[40%] md:mt-16'>
                            <h3 className='duration-[2s] opacity-0 translate-x-[500px]  w-full h-[30%] overflow-hidden text-white text-xl md:text-[60px] mt-2 font-melo flex justify-start items-center ps-6'>Clean Shave</h3>
                            <h3 className='duration-[2s] opacity-0 translate-x-[500px]  w-full h-[30%] overflow-hidden text-white text-xl md:text-[60px] mt-2 font-melo flex justify-start items-center ps-6'>For Men</h3>

                        </div>
                        <p className='w-full h-[30%] opacity-0 duration-[2s] translate-x-[500px] text-[#cecec9] text-[10px] md:text-[16px] font-serif flex justify-start items-center ps-6'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi</p>
                        <button className='bg-inherit opacity-0 duration-[2s] translate-x-[500px] ms-6 cursor-pointer w-[150px] h-[55px] border-[2px] border-[#dbc19ba4] font-melo text-white'>Reserve Now</button>
                    </div>
                </div>
            </article>


        </section>
    )
}

export default About2