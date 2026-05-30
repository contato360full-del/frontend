import React from 'react'
import { motion } from 'framer-motion'

const features = [
  'Humanized care','Specialized professionals','Modern environment','Integrative health','Personalized treatment','Advanced techniques','Multidisciplinary team'
]

export default function WhyChoose(){
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {features.map((f,i)=> (
        <motion.div key={f} whileHover={{scale:1.02}} className="p-4 rounded-xl glass soft-card flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald/10 text-emerald flex items-center justify-center">✓</div>
          <div className="text-sm font-medium">{f}</div>
        </motion.div>
      ))}
    </div>
  )
}
