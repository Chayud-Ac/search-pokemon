import React from 'react'
import SearchInput from './common/SearchInput';



const Navbar = () => {
  return (
    <div 
      className="flex bg-slate-100 justify-center p-5 rounded-md shadow-sm"
    >
       <SearchInput />
    </div>
  )
}

export default Navbar
