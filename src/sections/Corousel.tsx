import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import _ from 'lodash';

const Corousel = () => {
  return (
    <div className='w-full min-h-[10rem]'>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Pagination, Navigation]}
        className="h-screen md:h-96 flex justify-center items-center z-10"
      >
        {
          _.map([0, 1, 2, 3], (val, key) => (
            <SwiperSlide key={key}>
              <div className="flex space-x-4 h-full bg-blue-50 items-center justify-center">
                {/* <Img src={''} alt="" className="w-20 min-h-fit" /> */}
                <div className="space-y-2">
                  <label className="font-bold md:text-[16px] leading-[18px]">Title {key}</label>
                  <div className="md:text-[15px] leading-[26px]">Descriptions</div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Corousel