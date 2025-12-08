import React from 'react'
// import Navbar from '../shared/container/navbarDesktop'
import MobileMenu from '../shared/container/navbarMobile'

const page = () => {
  return (
    <div className='text-3xl font-bold text-center'>
      {/* <Navbar/> */}
    <MobileMenu ></MobileMenu>
      </div>
  )
}

export default page