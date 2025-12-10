import React from 'react'
import Vision from '../modules/abouts/contaner/Vision'
import ContactSection from '../modules/contact/containers/GetInTouch'
import ContactLeft from '../modules/contact/containers/ContactLeft'
// import Navbar from '../shared/container/navbarDesktop'
// import MobileMenu from '../shared/container/navbarMobile'

const page = () => {
  return (
    <div className='text-3xl font-bold text-center'>
      {/* <Navbar/> */}
    {/* <MobileMenu></MobileMenu> */}
    <ContactSection/>
    <Vision/> 
    <ContactLeft/>  
      </div>
  )
}

export default page