import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
    const card = useSelector(state=>state.card)
  return (
    <div>
        {card.map((car) => (
        <div key={car.id} className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-6 flex flex-col ">
          <h1 className="text-xl font-bold mt-4 text-center">{car.name}</h1>
          <p className="text-gray-600 mt-2 text-center">{car.description}</p>
          <Heart className="w-10 h-10 ml-[150px] mt-[50px] text-red-500 fill-current" />
        </div>
      ))}
    </div>
  )
}

export default Header