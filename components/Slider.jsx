import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import '../assets/master.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Bg2 from '../assets/img/about.png'
import sl1 from '../assets/img/sl1.png'
import sl2 from '../assets/img/sl2.png'
import sl3 from '../assets/img/sl3.png'


const Slider = () => {
    return (
        <section className='sticky h-[750px] w-full bg-[#201f1f] '>
            <div className='w-full font-melo h-[150px] flex justify-start items-center'>
                <h2 className='ms-6 overflow-hidden mx-3 text-white text-3xl md:text-6xl font-melo  flex justify-center items-center '>Our Team Member
                </h2>
                <div className='mx-3 mt-8 w-[100px] h-[3px] bg-[#dbc19ba4]'></div>
            </div>

            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={sl1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sl2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sl3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Bg2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sl1} alt="" />
                </SwiperSlide>

            </Swiper>
        </section>
    )
}

export default Slider