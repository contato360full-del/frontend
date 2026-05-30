import React from 'react'
import { motion } from 'framer-motion'

const imgs = ['/assets/images/room1.svg','/assets/images/room2.svg','/assets/images/room3.svg']

export default function Gallery(){
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Experiência na clínica</h3>
      <div className="grid grid-cols-2 gap-3">
        {imgs.map((s,i)=> (
          <motion.div key={i} whileHover={{scale:1.03}} className="rounded-xl overflow-hidden soft-card">
            <img src={s} alt="clinic" className="w-full h-40 object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
