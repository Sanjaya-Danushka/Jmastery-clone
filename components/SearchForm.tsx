"use client";  

import Image from 'next/image'
import React, { useState } from 'react'
import { Input } from './ui/input'


const SearchForm = () => {
  const [search, setSearch] = useState('');

  return (
      <form className='flex-center mx-auto mt-10 w-full sm:mt-10 sm:px-5'>
        <label className='flex-center relative w-full max-w-3xl'>
            <Image
            src='magnifying-glass.svg' alt='search' width={32} height={32}
            className='absolute left-8' />
            <Input type='text' placeholder='Search' className='base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 ring-0! ring-offset-0! placeholder:text-white-800 '
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

        </label>
      </form>
  )
}

export default SearchForm