import Navbar from '@/components/Navbar'
import React from 'react'
// import "../globals.css"
import Footer from '../../components/Footer';

const layout = ({children}:{children:React.ReactNode}) => {
  return (
      <>
      {/* navbar */}
      <Navbar />
        {children}
        {/* footer */}
        <Footer />
      </>
  )
}

export default layout