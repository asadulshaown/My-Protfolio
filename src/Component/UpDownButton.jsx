
import React from 'react'

const UpDownButton = () => {
  return (
    <div >
      <div className='border-4 rounded border-white  bg-green-600 fixed top-96 right-20 '>
         <button className=' text-center mb-3 text-3xl font-bold relative border-white  p-3  text-red-600'>
          ^
    </button>

     <button className='mt-5 text-center text-3xl rotate-180 font-bold p-3 fixed top-96 right-1 text-slate-300'>
          ^
    </button>
      </div>
    </div>
  )
}

export default UpDownButton