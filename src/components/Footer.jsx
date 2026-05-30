import React from 'react'
import { WA_PHONE } from '../config'

export default function Footer(){
  return (
    <footer className="bg-white mt-12 border-t">
      <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <div className="font-bold">Biotrato Saúde Integrativa</div>
          <div className="text-sm text-gray-600 mt-2">Rua Exemplo, 123 — Centro</div>
          <div className="text-sm text-gray-600">Horário: Seg–Sex 8:00–18:00</div>
        </div>
        <div>
          <div className="font-semibold">Contato</div>
          <a className="block text-emerald mt-2" href={`https://wa.me/${WA_PHONE.replace(/[^0-9+]/g,'')}`}>WhatsApp</a>
          <a className="block text-sm text-gray-600 mt-2" href="#">Instagram</a>
        </div>
        <div>
          <div className="font-semibold">Links rápidos</div>
          <a className="block text-sm text-gray-600 mt-2" href="#services">Especialidades</a>
          <a className="block text-sm text-gray-600 mt-2" href="#professionals">Equipe</a>
        </div>
      </div>
    </footer>
  )
}
