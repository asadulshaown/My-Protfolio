  import React from 'react';

  const ProjectCode = () => {
    return (
      <div className='container bg-red-500 mt-10 text-lime-50 text-center grid grid-flow-row'>
          <h1 className='mt-4 font-serif font-semibold text-3xl text-emerald-400 uppercase inline-block '>
            Project Code 
          </h1>
          <div className='grid grid-cols-3'>
            <div className='m-2 hover:scale-110 transition duration-500' data-aos="flip-right">
              <img src='/Images/code4.png' alt='Project Code1'>
              </img>
            </div>

            <div className='m-2' data-aos="flip-up">
              <img src='/Images/code4.png'>
              </img>
            </div>

            <div className='m-2 ' data-aos="flip-left">
              <img src='/Images/code4.png'>
              </img>
            </div>

            <div className='m-2' data-aos="flip-right">
              <img src='/Images/code4.png'>
              </img>
            </div>

            <div className='m-2' data-aos="flip-down">
              <img src='/Images/code4.png'>
              </img>
            </div>

            <div className='m-2' data-aos="flip-left">
              <img src='/Images/code4.png'>
              </img>
            </div>

          </div>
      </div>
    )
  }

  export default ProjectCode