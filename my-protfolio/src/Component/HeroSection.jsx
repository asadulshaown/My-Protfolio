
import React from 'react'

const HeroSecetion = () => {
  
  const date =  Date();
  const newdate = new Date();
  const H = newdate.getHours()
if (H==21) {
   
  
  
}
else{
  console.log(H);
  
}
  const M = newdate.getMinutes()
  const S = newdate.getSeconds()

  //console.log(year);
  
  
  
  
  
  return (
    <div className='heroSec h-screen p-5   ml-2 mr-2   shadow shadow-gray-950  '>
      <div className='text-right '>
      <div className='  inline-flex '>
        <div className=' inline-block '>
        <div className='w-20 h-2 border border-white rounded-b bg-slate-900 ml-2 p-1 '>

        </div>
          <div className='w-2 h-10 p-1  border border-white bg-slate-900 rounded-r '>

          </div>
          <div className='w-20 h-2 p-1 border border-white bg-slate-900 rounded ml-2'>

        </div>
          <div className='w-2 h-10 p-1 border border-white bg-slate-900 rounded-r'>

        </div>
        <div className='w-20 h-2 p-1 border border-white bg-slate-900 ml-2 rounded-t'>

        </div>
        
        
        </div>
        <div className=' inline-block '>
          <div className='w-2 h-10 border border-white bg-slate-900 mt-2 p-1 rounded-l'>

          </div>
          <div className='w-2 p-1 h-10 border border-white bg-slate-900 mt-2 rounded-l '>

        </div>
        
        
        </div>
        <div className=' inline text-7xl text-red-600'>
          :
        </div>
        <div className='  inline-flex'>
        <div className=' inline-block '>
        <div className='w-20 h-2 p-1 border border-white rounded-b bg-slate-900 ml-2 '>

        </div>
          <div className='w-2 h-10 p-1 border border-white bg-slate-900 rounded-r '>

          </div>
          <div className='w-20 h-2 p-1 border border-white bg-slate-900 rounded ml-2'>

        </div>
          <div className='w-2 h-10 p-1 border border-white bg-slate-900 rounded-r'>

        </div>
        <div className='w-20 h-2 p-1 border border-white bg-slate-900 ml-2 rounded-t'>

        </div>
        
        
        </div>
        <div className=' inline-block '>
          <div className='w-2 h-10 p-1 border border-white bg-slate-900 mt-2 rounded-l'>

          </div>
          <div className='w-2 h-10 p-1 border border-white bg-slate-900 mt-2 rounded-l '>

        </div>
        
        
        </div>
        </div>
        <div className=' inline text-7xl text-red-600'>
          :
        </div>
        <div className='  inline-flex'>
        <div className=' inline-block '>
        <div className='w-20 h-2 p-1 border border-white rounded-b bg-slate-900 ml-2 '>

        </div>
          <div className='w-2 h-10 p-1 border border-white bg-slate-900 rounded-r '>

          </div>
          <div className='w-20 h-2 p-1 border border-white bg-slate-900 rounded ml-2'>

        </div>
          <div className='w-2 h-10 p-1 border border-white bg-slate-900 rounded-r'>

        </div>
        <div className='w-20 h-2 p-1 border border-white bg-slate-900 ml-2 rounded-t'>

        </div>
        
        
        </div>
        <div className=' inline-block '>
          <div className='w-2 h-10 p-1 border border-white bg-slate-900 mt-2 rounded-l'>

          </div>
          <div className='w-2 h-10 p-1 border border-white bg-slate-900 mt-2 rounded-l '>

        </div>
        
        
        </div>
        </div>
        </div>
      </div>
      
        

       
 
    
    

    </div>
  )
}

export default HeroSecetion