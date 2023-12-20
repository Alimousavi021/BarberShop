import React from 'react'
import Title from './Title'
import S from '../assets/img/siah.png'

const Designer = ({titr,imgty,uxt}) => {
  return (
    <section className='w-full h-[1000px] bg-[#201f1f] sticky flex justify-center items-center flex-wrap'>
        <Title titr={titr} title={'What People Says'} />
        <div ref={uxt} className='w-[80%] overflow-hidden h-[70%] border border-[#484545da] flex justify-center flex-wrap'>
        <div className='w-full flex justify-center items-center'>
            <figure className='w-[200px] h-[200px] flex justify-center items-end pb-2 overflow-hidden'>
                <img src={S} alt="" ref={imgty} className='duration-[2s] translate-y-[400px]' />
            </figure>
        </div>
        <p className='duration-[2s] translate-y-[700px] w-[60%] h-[30%] text-[#cecec9] text-justify  text-[8px] md:text-[16px] font-serif flex justify-start items-center ps-6'>unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vi voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima  quis nostrususcipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure rin ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui</p>
        <h2 className='duration-[2s] translate-y-[700px] overflow-hidden mx-3 text-white text-3xl md:text-4xl font-melo w-full  flex justify-center items-center'>Ronda Roussy</h2>
        <h3 className='duration-[2s] translate-y-[700px] w-[20%]  flex justify-center items-center text-xl text-[#f6e5ba]'>UX Designer</h3>
        </div>
         
    </section>
  )
}

export default Designer