import React from 'react'
import services from '../data/services'
import { motion } from 'framer-motion'

export default function ServicesGrid(){
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {services.map(s=> (
        <motion.div key={s.title} whileHover={{y:-6}} className="p-4 rounded-xl glass soft-card">
          <div className="w-12 h-12 rounded-lg bg-emerald/10 flex items-center justify-center text-emerald">{s.icon}</div>
          <div className="mt-3 font-semibold">{s.title}</div>
          <div className="text-sm text-gray-600 mt-1">{s.desc}</div>
        </motion.div>
      ))}
    </div>
  )
}
