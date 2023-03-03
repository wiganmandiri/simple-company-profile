import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Corousel from './sections/Corousel'
import Footer from './sections/Footer'
import Product from './sections/Product'
import Features from './sections/Features'
import Testimonial from './sections/Testimonial'
import MegaMenu from './components/MegaMenu'
import Drowdown from './components/Drowdown'
import React, { useEffect, useRef } from 'react'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [modalName, setModalName] = useState('')
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  const handleClick = (value: string) => {
    setModalName(value)
    if (modalName === value) setIsOpen(!isOpen)
    else setIsOpen(true)
  }

  const ref: any = useRef()

  useEffect(() => {
    if (isOpen) {
      const checkIfClickedOutside = (e: any) => {
        if (isOpen && ref.current && !ref.current.contains(e.target)) {
          setIsOpen(false)
        }
      }
      document.addEventListener("mousedown", checkIfClickedOutside)
      return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside)
      }
    }
  }, [isOpen]) //eslint-disable-line


  return (
    <div className='flex flex-col justify-between min-h-screen'>

      <div>
        <div ref={ref} className='z-[999]'>
          <header className="text-center flex justify-between bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-8 shadow-md">
            <div className="flex w-60 items-center text-xl space-x-3 font-semibold">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
              <div>Test Company Profile</div>
            </div>
            <ul className="flex flex-row flex-wrap font-semibold gap-4 text-lg">
              <li className={`${isOpen && (modalName === 'mega-menu') ? "bg-gradient-to-r from-trasparent to-blue-100": ""} hover:bg-gradient-to-r from-trasparent to-blue-100  navbar`} onClick={() => handleClick('mega-menu')}>
                Mega Menu
              </li>
              <li className={`${isOpen && (modalName === 'dropdown') ? "bg-gradient-to-r from-trasparent to-blue-100": ""} hover:bg-gradient-to-r from-trasparent to-blue-100  navbar`} onClick={() => handleClick('dropdown')}>
                Dropdown Menu
              </li>
            </ul>
          </header>
          <div className='flex w-full justify-end'>
            <Drowdown
              isOpen={isOpen && (modalName === 'dropdown')} etIsOpen={setIsOpen}
            />
          </div>
          <div>
            <MegaMenu isOpen={isOpen && modalName === 'mega-menu'} setIsOpen={setIsOpen} />
          </div>
        </div>
        <main className="flex flex-col z-10">
          <Corousel />
          <Product />
          <Features />
          <Testimonial />
        </main>
      </div>
      <Footer />
    </div >
  )
}

export default App
