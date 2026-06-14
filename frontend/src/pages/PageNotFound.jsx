import React from 'react'
import { assets } from '../assets/assets'

const PageNotFound = () => {
  return (
    <>
    <div className='d-flex flex-column align-items-center justify-content-center' style={{height:"80vh"}}>
     <img src={assets.not} alt="" width={"300px"}/>
      <p style={{fontSize:"100px",fontWeight:"700"}}>404</p>
      <p>We can't seem to find the page you are looking for. It might have moved, or the link might be broken. Let's get you back on track.</p>
    </div>
    </>
  )
}

export default PageNotFound