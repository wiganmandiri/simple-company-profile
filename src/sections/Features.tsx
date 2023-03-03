import React from 'react'
import { motion } from "framer-motion"
import _ from 'lodash'
import Img from '../components/Img'

const Features = () => {
  return (
    <div className='bg-blue-200 w-full min-h-[10rem]'>
      <div className="flex flex-col md:flex-row justify-end w-full h-full">
        <div className="md:w-2/3 bg-blue-200 flex justify-center items-center md:overflow-hidden">
          <h1 className='uppercase my-8'>features</h1>
        </div>
        <div className="bg-[#F5F7F9] grid grid-cols-1 md:w-full md:grid-cols-2 gap-6 text-left p-8">
          {
            _.map([0, 1, 2, 3], (val, key) => (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeOut", duration: (0.2 * key) }} key={key} className="flex space-x-4 items-start">
                <Img src={''} alt="" className="w-20 min-h-fit" />
                <div className="space-y-2">
                  <label className="font-bold md:text-[16px] leading-[18px]">Feature {key}</label>
                  <div className="md:text-[15px] leading-[26px]">Descriptions</div>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Features