import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { motion } from 'framer-motion'
import professionals from '../data/professionals'
import { WA_PHONE } from '../config'

const wa = (name) => `https://wa.me/${WA_PHONE.replace(/[^0-9+]/g,'')}?text=${encodeURIComponent(`Hello! I would like information about an appointment with ${name} at Biotrato Saúde Integrativa.`)}`

export default function ProfessionalsCarousel(){
  return (
    <div className="py-2">
      <Swiper slidesPerView={1.2} spaceBetween={12} breakpoints={{640:{slidesPerView:2.2},1024:{slidesPerView:3.2}}}>
        {professionals.map((p)=> (
          <SwiperSlide key={p.name}>
            <motion.div whileHover={{y:-6}} className="glass rounded-xl p-4 min-h-[180px]">
              <div className="flex items-center gap-3">
                <img src={p.img} alt={p.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-gray-600">{p.specialty}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-700">{p.bio}</p>
              <div className="mt-4 flex justify-end">
                <a href={wa(p.name)} className="px-3 py-2 bg-emerald text-white rounded-full text-sm">Schedule Appointment</a>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
