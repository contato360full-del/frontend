import React, {useState} from 'react'

const faqs = [
  {q:'How do I schedule?', a:'You can schedule via WhatsApp or phone.'},
  {q:'Do you accept insurance?', a:'We accept a range of insurances; check with reception.'},
  {q:'Where are you located?', a:'Our address is listed in the footer.'},
  {q:'How does the evaluation work?', a:'Initial evaluation includes history and functional tests.'},
  {q:'How can I contact the clinic?', a:'Via WhatsApp button or Instagram.'}
]

export default function FAQ(){
  const [open, setOpen] = useState(null)
  return (
    <div>
      <h3 className="font-semibold mb-3">Perguntas frequentes</h3>
      <div className="space-y-2">
        {faqs.map((f,i)=> (
          <div key={i} className="glass p-3 rounded-lg">
            <button className="w-full text-left flex justify-between items-center" onClick={()=> setOpen(open===i?null:i)}>
              <span>{f.q}</span>
              <span>{open===i?'-':'+'}</span>
            </button>
            {open===i && <div className="mt-2 text-sm text-gray-700">{f.a}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
