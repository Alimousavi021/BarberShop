import { useEffect, useRef, useState } from 'react'
import './assets/master.css'
import Header from './components/header'
import Hero from './components/Hero'
import AboutBg from './components/AboutBg'
import Services from './components/Services'
import About2 from './components/About2'
import Slider from './components/Slider'
import Designer from './components/Designer'
import Shop from './components/Shop'
import News from './components/News'
import Footer1 from './components/footer1'
import Footer2 from './components/footer2'

export default function App() {
  const [st, setSt] = useState(0)
  const myRef = useRef()
  const a = useRef(null)
  const titr = useRef(null)
  const titl = useRef(null)
  const tits = useRef(null)
  const titn = useRef(null)
  const ttl = useRef(null)
  const ttr = useRef(null)
  const ttr2 = useRef(null)
  const card1 = useRef(null)
  const card2 = useRef(null)
  const card3 = useRef(null)
  const imgty = useRef(null)
  const uxt = useRef(null)
  const newsc = useRef(null)
  const newim = useRef(null)
  const newsc2 = useRef(null)
  const newim2 = useRef(null)
  const foot1 = useRef(null)
  const foot2 = useRef(null)
  const foot3 = useRef(null)
  const dokme = useRef(null)

  const myScroll = () => {
    let temp = myRef.current.scrollTop
    setSt(temp)

    let h3 = a.current.offsetTop
    let x = Object.entries(a.current.children)
    let tr = Object.entries(ttr.current.children)
    let tr2 = Object.entries(ttr2.current.children)
    let ux = Object.entries(uxt.current.children)
    let newscc = Object.entries(newsc.current.children)
    let newscc2 = Object.entries(newsc2.current.children)
    if ((st) > (h3 + 300)) {
      x.forEach((val) => {
        val[1].style.transform = 'translateY(0)'
      })
    }


    if (st > ((titl.current.offsetTop) + 1000)) {
      titl.current.style.transform = 'translateY(0)'
    }
    if (st > ((titr.current.offsetTop) + 3200)) {
      titr.current.style.transform = 'translateY(0)'
    }
    if (st > ((tits.current.offsetTop) + 4000)) {
      tits.current.style.transform = 'translateY(0)'
    }
    if (st > ((titn.current.offsetTop) + 5500)) {
      titn.current.style.transform = 'translateY(0)'
    }
    // ***
    if (st > ((card1.current.offsetTop) + 1000)) {
      card1.current.style.transform = 'translateY(0)'
    }
    if (st > ((card2.current.offsetTop) + 1000)) {
      card2.current.style.transform = 'translateY(0)'
    }
    if (st > ((card3.current.offsetTop) + 1000)) {
      card3.current.style.transform = 'translateY(0)'
    }
    // ***

    if (st > (ttl.current.offsetTop + 1800)) {
      ttl.current.style.transform = 'translateX(0)'
      ttl.current.style.opacity = '1'
    }
    if (st > (ttr.current.offsetTop + 1800)) {
      tr.forEach((val) => {
        val[1].style.transform = 'translateX(0)'
        val[1].style.opacity = '1'
      })
    }
    if (st > (ttr.current.offsetTop + 1800)) {
      tr2.forEach((val) => {
        val[1].style.transform = 'translateX(0)'
        val[1].style.opacity = '1'
      })
    }
    // ***
    if (st > (imgty.current.offsetTop + 3400)) {
      imgty.current.style.transform = 'translateY(0)'
    }
    if (st > (uxt.current.offsetTop + 3400)) {
      ux.forEach((val) => {
        val[1].style.transform = 'translateY(0)'
      })
    }

    // ***
    if (st > (newsc.current.offsetTop + 5300)) {
      newscc.forEach((val) => {
        val[1].style.transform = 'translateX(0)'
        val[1].style.opacity = '1'
      })
    }
    if (st > (newsc.current.offsetTop + 6100)) {
      newscc2.forEach((val) => {
        val[1].style.transform = 'translateX(0)'
        val[1].style.opacity = '1'
      })
    }
    if (st > (newsc.current.offsetTop + 5800)) {
      newim.current.style.transform = 'translateX(0)'
      newim.current.style.opacity = '1'
    }
    if (st > (newsc.current.offsetTop + 6300)) {
      newim2.current.style.transform = 'translateX(0)'
      newim2.current.style.opacity = '1'
    }
    // ***
    if(st>(foot1.current.offsetTop + 7000)){
      foot1.current.style.transform = 'translateY(0)'
      foot2.current.style.transform = 'translateY(0)'
      foot3.current.style.transform = 'translateY(0)'
      dokme.current.style.transform='translateY(0)'

    }

  }

  return (
    <main ref={myRef} onScroll={myScroll} class="bg-[#f5e8d5] w-full 2xl:container h-[100vh] mx-auto overflow-y-scroll overflow-x-hidden">
      <section className='w-full'>
        <Header />
        <Hero />
        <AboutBg h3={a} />
        <Services titr={titl} card1={card1} card2={card2} card3={card3} />
        <About2 ttl={ttl} ttr={ttr} ttr2={ttr2} />
        <Slider />
        <Designer titr={titr} imgty={imgty} uxt={uxt} />
        <Shop titr={tits} />
        <News titr={titn} newsc={newsc} newsc2={newsc2} newim={newim} newim2={newim2} />
        <Footer1 foot1={foot1} foot2={foot2} foot3={foot3} dokme={dokme} />
        <Footer2 />

      </section>
    </main>
  )
}


