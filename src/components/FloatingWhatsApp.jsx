import React from 'react'
import { WA_PHONE } from '../config'

export default function FloatingWhatsApp(){
  const href = `https://wa.me/${WA_PHONE.replace(/[^0-9+]/g,'')}?text=${encodeURIComponent('Olá! Gostaria de agendar uma consulta.')}`
  return (
    <a href={href} target="_blank" rel="noreferrer" className="fixed right-4 bottom-6 bg-emerald text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.6c0 4.8-3.9 8.7-8.7 8.7a8.6 8.6 0 0 1-3.7-.8L3 21l1.5-5.6a8.6 8.6 0 0 1-.8-3.7C3.7 7.5 7.6 3.6 12.4 3.6S21 7.5 21 12.6z" />
      </svg>
    </a>
  )
}
