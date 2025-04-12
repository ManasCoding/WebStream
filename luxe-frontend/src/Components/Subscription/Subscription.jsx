import React from 'react'
import Button from '../Button/Button'
import Navbar from '../Navbar/Navbar'

const Subscription = () => {
  return (
    <div className='w-screen h-screen bg-zinc-900 flex flex-col justify-center items-center relative'>
        <div className='absolute top-0 left-0'><Navbar /></div>
        <div><h1 className='text-4xl text-white absolute top-[10%] left-[40%]'>Choose your plan</h1></div>
        <p className='hidden'>Popular Picks, Prices That Click & Where Popularity Meets Pricing Power.</p>
        <p className='hidden'>Pricing Excellence, Always Popular.</p>
        <div className='w-screen h-screen flex justify-center items-end mb-2'>
            <div className='w-[18%] h-[65%] bg-zinc-400 border-[2px] border-blue-600 rounded-t-lg  flex flex-col justify-between items-center pt-5 leading-8'>
                <h3 className='text-black text-2xl'>FREE</h3>
                <p>Organize across all</p>
                <p>apps by hand</p>
                <h2 className='text-xl'><span className='text-blue-600 text-4xl'>$0.00</span>/Month</h2>
                <div>
                    <p>✅ Unlimited product updates</p>
                    <p>✅ Unlimited product updates</p>
                    <p>✅ Unlimited product updates</p>
                    <p>🚫 1 GB Cloud storage</p>
                    <p>🚫 Email and community</p>
                </div>
                <div><Button color='bg-blue-600' title='Try For Free'/></div>
            </div>
            <div className='w-[18%] h-[70%] bg-zinc-400 rounded-t-lg bg-blue-900 flex flex-col justify-between items-center pt-5 leading-8'>
                <h3 className='text-2xl text-white'>STANDARD</h3>
                <p>Organize across all</p>
                <p>apps by hand</p>
                <h2 className='text-xl'><span className='text-blue-600 text-4xl'>$11.99</span> /Month</h2>
                <div>
                    <p>✅ Unlimited product updates</p>
                    <p>✅ Unlimited product updates</p>
                    <p>✅ Unlimited product updates</p>
                    <p>✅ 1 GB Cloud storage</p>
                    <p>✅ Email and community</p>
                </div>
                <div><Button title='Try For Free'/></div>
            </div>
            <div className='w-[18%] h-[65%] bg-zinc-400 border-[2px] border-blue-600 rounded-t-lg flex flex-col justify-between items-center pt-5 leading-8'>
                <h3 className='text-black text-2xl'>PRIMEUM</h3>
                <p>Organize across all</p>
                <p>apps by hand</p>
                <h2 className='text-xl'><span className='text-blue-600 text-4xl'>$49.99</span> /Year</h2>
                <div>
                    <p>✅ Unlimited product updates</p>
                    <p>✅ Unlimited product updates</p>
                    <p>✅ Unlimited product updates</p>
                    <p>✅ 1 GB Cloud storage</p>
                    <p>✅ Email and community</p>
                </div>
                <div><Button color='bg-blue-600' title='Try For Free'/></div>
            </div>
        </div>
    </div>
  )
}

export default Subscription