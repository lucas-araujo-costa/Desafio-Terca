'use client'
import { useState } from "react"

export default function Home() {
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState(null)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setAddress(null)
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()
      setAddress(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className="bg-slate-900 w-screen h-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-white text-7xl font-extrabold mb-20">CEP Finder</h1>
        <form className="flex gap-3" onSubmit={handleSubmit}>
          <input className="bg-[#464c58] h-[40px] shadow-black rounded-md text-white p-3 placeholder:text-white placeholder:text-[18px]"
            placeholder="Informe seu CEP..." onChange={self => setCep(self.target.value)} value={cep} type="number" />
          <button className="bg-[#0ea5e9] h-[40px] text-white rounded-sm p-2 text-[18px]">Buscar</button>
        </form>
        {address && (
          <div className="text-black bg-slate-100 mt-5 w-[450px] h-fit p-5 rounded-md text-center">
            <span className="text-3xl font-bold leading-[50px] ">CEP: {address.cep}</span>
            <p className="text-2xl">{address.logradouro}</p>
            <p className="text-2xl">{address.complemento}</p>
            <p className="text-2xl">{address.bairro}</p>
            <p className="text-2xl">{address.localidade} - {address.uf}</p>
          </div>
        )} 
      </div>
    </main>
  )
}