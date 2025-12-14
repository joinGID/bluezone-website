import React from 'react'
import WelcomeHome from '../modules/about/container/WelcomeHome'
import HeadLine from '../shared/components/HeadLine'
import PhotoGallery from '../modules/about/container/PhotoGallery'
import Footer from '../shared/container/Footer'
import AboutStory from '../modules/about/container/AboutStory'
import AboutCarousel from '../modules/about/container/AboutCarousel'
// import Vision from '../modules/abouts/contaner/Vision'
// import ContactSection from '../modules/contact/containers/GetInTouch'
// import ContactLeft from '../modules/contact/containers/ContactLeft'
// import OutlineButton from '../shared/components/OutlineButton'
// import Service from '../modules/service/container/Service'
// import Gallery from '../modules/gallery/containers/Gallery'

// import Navbar from '../shared/container/navbarDesktop'
// import MobileMenu from '../shared/container/navbarMobile'

const page = () => {
  return (
    <div className='text-3xl font-bold text-center'>
      {/* <Navbar/> */}
      {/* <MobileMenu ></MobileMenu> */}
      <AboutCarousel/>
      <WelcomeHome />
    <HeadLine />
    <PhotoGallery />
    <AboutStory />
      <Footer />
    </div>
  )
}

export default page