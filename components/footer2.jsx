import React from 'react'
import shape from '../assets/img/shape.png'


const footer2 = () => {
    return (
        <section className='sticky h-[750px] w-full bg-[#f5e8d5] flex justify-center items-center'>
            <div className='border border-[#dbc19ba4] w-[90%] h-[90%] relative flex flex-wrap justify-center items-center'>
                <img src={shape} alt="" className='absolute bottom-0 left-0 shape-anim' />
                <img src={shape} alt="" className='absolute top-0 right-0 shape-anim2' />
                <p className='absolute top-2 right-10 w-[35%] flex flex-wrap text-[#999282] text-justify  text-[8px] md:text-[16px] font-serif'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et lorem ipsum dolor sit</p>
                <nav className='w-[85%] h-[80%] flex flex-wrap justify-center content-center'>
                    <ul className='w-full h-[20%] flex justify-evenly'>
                        <li className='font-melo text-black text-xl md:text-2xl mx-5 flex justify-center'>Menu</li>
                        <li className='font-melo text-black text-xl md:text-2xl mx-5 flex justify-center'>Utility Pages</li>
                        <li className='font-melo text-black text-xl md:text-2xl mx-5 flex justify-center'>Opening Ours</li>
                        <li className='font-melo text-black text-xl md:text-2xl mx-5 flex justify-center'>Join Newsletter</li>
                    </ul>
                    <ul className='w-full h-[10%]   flex justify-evenly'>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>Home</li>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>Style Guide</li>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>Sat : 9am - 10pm</li>
                        <li className='font-serif text-[#999282] w-[200px] text-[10px] md:text-[17px] mx-5 flex justify-center'>Subscribe our newsletter to get more</li>
                    </ul>
                    <ul className='w-full h-[10%]   flex justify-evenly'>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>About us</li>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>404</li>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>Sun : 9am - 10pm</li>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>Join Newsletter</li>
                    </ul>
                    <ul className='w-full h-[10%]   flex justify-evenly'>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>Services</li>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>Protected Password</li>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>Mon : 9am - 10pm</li>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>Join Newsletter</li>
                    </ul>
                    <ul className='w-full h-[10%]   flex justify-evenly'>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>Shop</li>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>License</li>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>Tue : 9am - 10pm</li>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>Join Newsletter</li>
                    </ul>
                    <ul className='w-full h-[10%]   flex justify-evenly'>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>Reservation</li>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>Changelog</li>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>Wed : 9am - 10pm</li>
                        <li className='font-serif text-[#999282] text-[10px] md:text-[17px] mx-5 flex justify-center'>Join Newsletter</li>
                    </ul>
                </nav>

                <div className='text-black font-serif flex justify-center items-center w-full h-[10%] text-[12px] md:text-[16px]'>Design & Developed by Aliown. Powered by webflow</div>

            </div>
        </section>
    )
}

export default footer2