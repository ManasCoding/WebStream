import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
const ImageDetails = () => {
  return (
    <div className='w-full bg-gradient-to-r from-slate-900 to-slate-700'>
      <Link to = "/" className='ml-[18%] mt-[5%] absolute'><Button/></Link>
      <div className='w-[70%] flex h-screen justify-between items-center m-auto p-[10%] bg-zinc-800'>
        <img src="" alt="" className='w-[40%] h-[80%] object-contain'/>
        <div className='content w-[50%]'>
          <h1 className='text-4xl text-white'>title</h1>
          <h3 className='text-white my-5'>category</h3>
          <p className='mb-[5%] text-white'>description </p>
          <div className='flex gap-4'>
            <Link to={'/editimage'}><Button title='Edit'/></Link>
            <Button title='Delete'/>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default ImageDetails