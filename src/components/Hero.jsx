import React from 'react'
import { motion } from 'framer-motion'
import { WA_PHONE } from '../config'

const waLink = (text) => `https://wa.me/${WA_PHONE.replace(/[^0-9+]/g,'')}?text=${encodeURIComponent(text)}`

export default function Hero(){
  return (
    <header className="relative overflow-hidden pb-8">
      <div className="bg-gradient-to-b from-emerald-light/30 via-white to-ice pt-6 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-dark flex items-center justify-center text-white font-bold">B</div>
            <div className="hidden sm:block">
              <div className="text-sm font-medium">Biotrato</div>
              <div className="text-xs text-gray-600">Saúde Integrativa</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <a href="#services" className="hover:underline">Especialidades</a>
            <a href="#professionals" className="hover:underline">Equipe</a>
            <a href="#experience" className="hover:underline">Clínica</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </nav>
          <div className="hidden sm:flex gap-3">
            <a href="#services" className="px-4 py-2 bg-white rounded-full shadow-soft glass hover:scale-105 transition">Explorar</a>
            <a href={waLink('Olá! Gostaria de agendar uma consulta na Biotrato Saúde Integrativa.')} className="px-4 py-2 bg-emerald text-white rounded-full glow-btn hover:shadow-lg transition">WhatsApp</a>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <motion.h1 initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-extrabold leading-tight">Taking care of you completely.</motion.h1>
            <motion.p initial={{y:8, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.7}} className="mt-4 text-gray-700 max-w-xl">We combine advanced physiotherapy, massage therapy, nutrition, pilates, and psychology to transform your health.</motion.p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="#services" className="px-5 py-3 rounded-full bg-white glass soft-card">Explore Treatments</a>
              <a href={waLink('Olá! Gostaria de informações sobre tratamentos na Biotrato.') } className="px-5 py-3 rounded-full bg-emerald text-white glow-btn">WhatsApp</a>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="absolute -left-8 md:-left-24 w-48 h-48 rounded-full bg-emerald/10 blur-3xl" />
            <motion.div initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.8}} className="w-64 h-80 rounded-2xl overflow-hidden soft-card glass">
              <img src="/assets/images/team.svg" alt="Equipe" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  )
}
