import React, { useEffect } from 'react'
import Title from './Title'
import Product from './Product'
import { Product1 } from '../constants'



const Shop = ({titr}) => {


    return (
        <section className='w-full sticky flex flex-wrap justify-center bg-[#201f1f]'>
            <Title titr={titr} title={'Our Product'} />

            <div class="grid grid-cols-1 grid-rows-6 md:grid-rows-3 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
                {
                    Product1.map((val)=>(
                        <Product key={val.id} img={val.image} price={val.price} name={val.title} />
                    ))
                }
            </div>
            <div className='font-melo w-full flex justify-center items-center my-12'>
                <button className='bg-inherit ms-6 cursor-pointer w-[150px] h-[55px] border-[2px] border-[#dbc19ba4] font-melo text-white'>Browse Shop</button>
            </div>


        </section>
    )
}

export default Shop