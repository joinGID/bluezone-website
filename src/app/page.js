import React from 'react'
// import Navbar from '../shared/container/navbarDesktop'
import NavbarDesktop from '../shared/container/NavbarDesktop'
import NavbarMobile from '../shared/container/NavbarMobile'

const page = () => {
  return (
    <div className='text-3xl font-bold text-center'>
      {/* <Navbar/> */}
{/* <NavbarDesktop /> */}
<NavbarMobile />
      </div>
  )
}

export default page