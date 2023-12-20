import React from 'react'

const Product = ({ img, price, name, ref }) => {
    return (
        <div ref={ref} className='w-[450px] h-[600px]  flex flex-wrap'>
            <figure className=' w-[100%] h-[100%] flex flex-wrap justify-center'>
                <img src={img} alt="" className='w-[95%] h-[80%] ' />
                <figcaption className='flex flex-wrap justify-center content-center  w-[90%] h-[20%]'>
                    <h2 className='w-full justify-center items-center flex text-white text-4xl font-melo my-2'>{name}</h2>
                    <span className='w-full text-xl text-[#f6e5ba] flex justify-center items-center'>{price}</span>

                </figcaption>
            </figure>


        </div>

    )
}

export default Product