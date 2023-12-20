import React from 'react'
import Title from './Title'
import n2 from '../assets/img/n2.png'
import n1 from '../assets/img/n1.png'

const News = ({titr,newsc,newim,newsc2,newim2}) => {
    return (
        <section className='w-full sticky bg-[#201f1f] flex flex-wrap justify-center'>
            <Title titr={titr} title={'News & Articles'} />
            <div className='flex flex-wrap justify-center items-center  w-full my-7'>
                <article ref={newsc} className=' w-[80%] md:w-[40%] flex flex-wrap justify-center'>
                    <h2 className='duration-[1s] opacity-0 translate-x-[-700px] w-[70%] text-xl text-white flex justify-start items-center  h-[100px]'>May 24,2022</h2>
                    <p className='duration-[1s] opacity-0 translate-x-[-700px] w-[70%] text-white font-melo text-2xl md:text-4xl flex justify-start'>10 Easy elegant wedding <br /> hairstyles that you can DIY</p>
                    <div className='duration-[1s] opacity-0 translate-x-[-500px]  w-[70%] flex mt-5'>
                        <h3 className='text-[#f6e5ba] text-xl mx-2 cursor-pointer'>View Details</h3>
                        <svg className='mt-3' width="38" height="8" viewBox="0 0 38 8" fill="#dbc19ba4" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.3536 4.35355C37.5488 4.15829 37.5488 3.84171 37.3536 3.64645L34.1716 0.464466C33.9763 0.269204 33.6597 0.269204 33.4645 0.464466C33.2692 0.659728 33.2692 0.976311 33.4645 1.17157L36.2929 4L33.4645 6.82843C33.2692 7.02369 33.2692 7.34027 33.4645 7.53553C33.6597 7.7308 33.9763 7.7308 34.1716 7.53553L37.3536 4.35355ZM0 4.5L37 4.5V3.5L0 3.5L0 4.5Z" fill="#F6E5BA" />
                        </svg>

                    </div>
                </article>
                <figure className=' w-[80%] md:w-[60%] flex items-center justify-center'>
                    <img src={n2} alt="" className='opacity-0 translate-x-[700px] duration-[1s]' ref={newim} />
                </figure>
            </div>
            <div className='flex flex-wrap justify-center items-center  w-full my-7'>
                <article ref={newsc2} className=' w-[80%] md:w-[40%] flex flex-wrap justify-center'>
                    <h2 className='duration-[1s] opacity-0 translate-x-[-700px] w-[70%] text-xl text-white flex justify-start items-center  h-[100px]'>May 24,2022</h2>
                    <p className='duration-[1s] opacity-0 translate-x-[-700px] w-[70%] text-white font-melo text-2xl md:text-4xl flex justify-start'>Why and how often should <br /> you use hand cream?</p>
                    <div className='duration-[1s] opacity-0 translate-x-[-700px]  w-[70%] flex mt-5'>
                        <h3 className='text-[#f6e5ba] text-xl mx-2 cursor-pointer'>View Details</h3>
                        <svg className='mt-3' width="38" height="8" viewBox="0 0 38 8" fill="#dbc19ba4" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.3536 4.35355C37.5488 4.15829 37.5488 3.84171 37.3536 3.64645L34.1716 0.464466C33.9763 0.269204 33.6597 0.269204 33.4645 0.464466C33.2692 0.659728 33.2692 0.976311 33.4645 1.17157L36.2929 4L33.4645 6.82843C33.2692 7.02369 33.2692 7.34027 33.4645 7.53553C33.6597 7.7308 33.9763 7.7308 34.1716 7.53553L37.3536 4.35355ZM0 4.5L37 4.5V3.5L0 3.5L0 4.5Z" fill="#F6E5BA" />
                        </svg>

                    </div>
                </article>
                <figure className=' w-[80%] md:w-[60%] flex items-center justify-center'>
                    <img ref={newim2} src={n1} alt="" className='opacity-0 duration-[1s] translate-x-[700px]' />
                </figure>
            </div>

        </section>
    )
}

export default News