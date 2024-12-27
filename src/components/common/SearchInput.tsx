"use client"
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai' 
import { useRouter } from 'next/navigation'
import { useState , useEffect } from 'react'



const SearchInput = () => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchValue.trim() !== '') {
        router.push(`?name=${searchValue}`)
      } else {
        router.push('/')
      }
    }, 500)
    return () => clearTimeout(handler)
  }, [searchValue, router])

  return (
    <div className="relative w-full max-w-[600px]">
      <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      <input
        className="pl-10 pr-4 py-2 rounded-full border-none border-gray-300 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500 transition duration-150 ease-in-out w-full shadow-md"
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  )
}

export default SearchInput