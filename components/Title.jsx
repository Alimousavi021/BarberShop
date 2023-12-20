import React from 'react'

const Title = ({title,titr}) => {
    return (
        <div className='w-full font-melo h-[150px] bg-[#201f1f] flex justify-center items-center sticky'>
           <div className='w-full flex justify-center items-center overflow-hidden'>
           <div className='mx-3 mt-8 w-[100px] h-[3px] bg-[#dbc19ba4]'></div>
            <h2 ref={titr} className='translate-y-[100px] duration-[2s] overflow-hidden mx-3 text-white text-3xl md:text-6xl font-melo  flex justify-center items-center '>{title}
            </h2>
            <div className='mx-3 mt-8 w-[100px] h-[3px] bg-[#dbc19ba4]'></div>
           </div>
        </div>
    )
}

export default Title