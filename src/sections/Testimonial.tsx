import React from 'react'
import { motion } from "framer-motion"
import _ from 'lodash'
import Img from '../components/Img'

const Testimonial = () => {
  return (
    <div className='bg-yellow-200 w-full min-h-[10rem]'>
      <h1 className='text-center uppercase my-8'>testimonial</h1>
      <div className='flex gap-4 flex-wrap pb-6'>
        {
          _.map([0, 1, 2, 3, 4, 5, 6], (val, key) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeOut", duration: (0.2 * key) }} key={key} className="flex bg-white p-2 rounded-lg space-x-4 items-start w-60 shadow">
              <Img src={''} alt="" className="w-20 min-h-fit" />
              <div className="space-y-2">
                <label className="font-bold md:text-[16px] leading-[18px]">Name</label>
                <div className="md:text-[15px] leading-[26px]">Comment</div>
              </div>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimonial