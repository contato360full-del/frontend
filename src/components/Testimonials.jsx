import React from 'react'
import { motion } from 'framer-motion'

const data = [
  {name:'Lucas M.', text:'Recuperei minha mobilidade com a equipe da Biotrato.', stars:5},
  {name:'Mariana R.', text:'Atendimento humano e eficiente.', stars:5},
]

export default function Testimonials(){
  return (
    <div>
      <h3 className="font-semibold mb-3">Depoimentos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {data.map((t,i)=> (
          <motion.div key={i} whileHover={{y:-6}} className="p-4 rounded-xl glass soft-card">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{t.name}</div>
              <div className="text-amber-400">{'★'.repeat(t.stars)}</div>
            </div>
            <p className="mt-2 text-sm text-gray-700">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
