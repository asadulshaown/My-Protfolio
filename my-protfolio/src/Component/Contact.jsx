import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faGithub, faLinkedinIn, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons'


const Contact = () => {

  const massage = <FontAwesomeIcon icon={faEnvelope} className='text-3xl m-3 p-2 border border-white rounded-full hover:bg-white hover:text-green-700 hover:-translate-y-2 hover:transition-all '/>
  const whatsapp = <FontAwesomeIcon icon={faWhatsapp} className='text-3xl m-3 p-2 border border-white rounded-full hover:bg-white hover:text-green-700 hover:-translate-y-2 hover:transition-all '/>
  const youtube = <FontAwesomeIcon icon={faYoutube} className='text-3xl m-3 p-2 border border-white rounded-full hover:bg-white hover:text-green-700 hover:-translate-y-2 hover:transition-all '/>
  const linkdin = <FontAwesomeIcon icon={faLinkedinIn} className='text-3xl m-3 p-2 border border-white rounded-full hover:bg-white hover:text-green-700 hover:-translate-y-2 hover:transition-all '/>
  const github = <FontAwesomeIcon icon={faGithub} className='text-3xl m-3 p-2 border border-white rounded-full hover:bg-white hover:text-green-700 hover:-translate-y-2 hover:transition-all '/>
  const facebook = <FontAwesomeIcon icon={faFacebook} className='text-3xl m-3 p-2 border border-white rounded-full hover:bg-white hover:text-green-700 hover:-translate-y-2 hover:transition-all '/>
  
  return (
    <div className='bg-neutral-500'>
        <div className='m-4  p-4 text-center'>
          <a href='###'>{massage}</a>
          <a href='https://wa.me/01300285547' target='_blank'>{whatsapp}</a>
          <a href='https://www.youtube.com/channel/UC1iSeKc_R6KUSWtWtW3yTmw'>{youtube}</a>
          <a href='https://www.linkedin.com/in/md-asadul-shaown-b81b75296/'>{linkdin}</a>
          <a href='https://github.com/asadulshaown'>{github}</a>
          <a href='https://www.facebook.com/nirasha.khan.92'>{facebook}</a>      

        </div>
    </div>
  )
}

export default Contact