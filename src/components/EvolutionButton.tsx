import React from 'react'
import Link from 'next/link'
import { GrUpgrade } from "react-icons/gr";


type EvolutionButtonProps = {
    name ?: string;
}

const EvolutionButton = ( {name} : EvolutionButtonProps ) => {

    console.log(name , "name is evaluation component which use to update the search params")

  return (
    <Link href={`/?name=${name}`} className='flex gap-2 items-center px-4 py-2 bg-green-400 rounded-lg shadow-sm'>
      <GrUpgrade className='text-green-900' size={20}/>
      <p className='text-lg font-semibold text-green-900'>Evolution</p>
    </Link>
  )
}

export default EvolutionButton