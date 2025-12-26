"use client";
import React, { useRef } from 'react'
import { useScroll, useSpring, useTransform } from 'framer-motion'
import WelcomeHome from '../modules/home/container/WelcomeHome'
import HeadLine from '../shared/components/HeadLine'
import PhotoGallery from '../modules/gallery/containers/PhotoGalleryHeader'
import ServiceVision from '../modules/service/container/ServiceVision'

// import ContactSection from '../modules/contact/containers/GetInTouch'
// import ContactLeft from '../modules/contact/containers/ContactLeft'
// import OutlineButton from '../shared/components/OutlineButton'
// import Service from '../modules/service/container/Service'
// import Gallery from '../modules/gallery/containers/Gallery'


import LandingVideo from '../modules/home/container/LandingVIdeo'
import ServiceHeading from '../modules/service/container/ServiceHeading'
import { motion } from 'framer-motion'

import Story from '../modules/about/component/Story';
import AboutCarousel from '../modules/about/container/AboutCarousel';
import ContentContainer from '../modules/about/container/ContentContainer';
import LocationConnectivity from '../modules/home/container/LocationConnectivity';
const page = () => {
  

  return (
    <div className='text-3xl font-bold text-center md:mt-0 mt-18'>

     
    <LandingVideo/>
    <WelcomeHome />
    <ContentContainer/>
    {/* <HeadLine /> */}
    <PhotoGallery />
<ServiceHeading/>
    <ServiceVision />
    {/* <AboutCarousel />
    <LocationConnectivity/> */}
    <Story/>
   

      </div>
  )
}

export default page