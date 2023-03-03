import React, { useEffect, useRef } from 'react'

const MegaMenu = ({ isOpen, setIsOpen }: any) => {
  

  return isOpen && (
    <div className='bg-blue-100 absolute z-30 w-full p-6 h-screen md:h-60'>
      <div className='flex flex-wrap gap-8'>
        <div>
          <h1 className='mb-2'>This is Mega </h1>
          <div className='flex flex-col gap-4'>
            <div>Menu 1</div>
            <div>Menu 2</div>
            <div>Menu 3</div>
          </div>
        </div>
        <div>
          <h1 className='mb-2'>This is Mega </h1>
          <div className='flex flex-col gap-4'>
            <div>Menu 1</div>
            <div>Menu 2</div>
            <div>Menu 3</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MegaMenu