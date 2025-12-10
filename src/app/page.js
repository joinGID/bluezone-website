import React from 'react'
import Vision from '../modules/abouts/contaner/Vision'
import ContactSection from '../modules/contact/containers/GetInTouch'
import ContactLeft from '../modules/contact/containers/ContactLeft'
// import OutlineButton from '../shared/components/OutlineButton'
import Service from '../modules/service/container/Service'
import Gallery from '../modules/gallery/containers/Gallery'

// import Navbar from '../shared/container/navbarDesktop'
// import MobileMenu from '../shared/container/navbarMobile'

const page = () => {
  return (
    <div className='text-3xl font-bold text-center'>
      {/* <Navbar/> */}
    {/* <MobileMenu></MobileMenu> */}
    <ContactSection/>
    <Service/>
    <Vision/> 
    <ContactLeft/>  
    {/* <OutlineButton label="Get In Touch"/> */}

    <Gallery/>
      </div>
  )
}

export default page