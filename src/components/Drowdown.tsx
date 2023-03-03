import React, { useEffect, useRef } from 'react'

const Drowdown = ({ isOpen, setIsOpen }: any) => {

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

  return isOpen && (
    <div className='flex flex-col gap-4 p-6 w-60 fixed z-20 bg-white shadow-md'>
      <div>menu 1</div>
      <div>menu 2</div>
      <div>menu 3</div>
    </div>
  )
}

export default Drowdown