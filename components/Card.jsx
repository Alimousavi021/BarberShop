import React from 'react'
import F from '../assets/img/flesh.png'

const Card = ({ img, title, card }) => {
    return (
        <article ref={card} className='w-[100%] duration-[2s] translate-y-[400px] h-[30%] md:w-[30%] md:h-[95%] border mx-4 bg-[#f6e5ba] flex flex-row md:flex-col'>
            <img src={img} alt="" className='m-5 w-[50px] md:w-[100px]' />
            <h2 className='text-black md:text-4xl font-melo w-full flex items-center justify-start ps-6'>{title}</h2>
            <p className='text-[#5d5d59] w-[90%] flex items-center justify-start ps-6 text-[7px] md:text-[18px] font-serif mt-5'>Tempora incidunt ut labore et dolore lorei magnam aliquam quaerat voluptatem. sr Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
            <div className='w-full flex flex-col md:flex-row justify-start ps-6 items-center mt-4'>
                <h3 className='text-black font-melo text-[15px] md:text-xl mx-2'>View Services</h3>
                <img src={F} alt="" />
            </div>
        </article>
    )
}

export default Card