import React from 'react'
import { MdOutlineAttachEmail } from "react-icons/md"
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='bg-black text-white pt-5 pb-4 px-3 px-md-5'>
      <div className='container-fluid'>
        <div className='row g-4 justify-content-between'>
          <div className='col-lg-5 col-md-6'>
            <h4 className='fw-bold mb-3 text-uppercase tracking-wider' style={{ letterSpacing: '1px' }}>
              Ai Resume Builder.ai
            </h4>
            <p className='text-secondary small lh-lg'>
              Our AI Resume Builder suggests job-specific keywords, professional summaries, and skill recommendations 
              to make your resume more effective and ATS-friendly. We simplify the resume creation process, helping 
              job seekers build professional, well-structured resumes in minutes.
            </p>
          </div>

          <div className='col-lg-4 col-md-6'>
            <h4 className='fw-bold mb-3 text-uppercase tracking-wider' style={{ letterSpacing: '1px' }}>
              Contact Us
            </h4>
            <div className='d-flex flex-column gap-2 mb-4'>
              <a href="mailto:resumebuilderai@gmail.com" className='text-secondary text-decoration-none d-flex gap-2 align-items-center transition-all hover-white'>
                <MdOutlineAttachEmail className='fs-5 text-light' /> resumebuilderai@gmail.com
              </a>
              <a href="tel:+91005669743" className='text-secondary text-decoration-none d-flex gap-2 align-items-center transition-all hover-white'>
                <FaPhone className='fs-6 text-light' /> +91 005 669 743
              </a>
            </div>

            <h5 className='fw-semibold mb-3 small text-uppercase text-secondary' style={{ letterSpacing: '0.5px' }}>
              Connect With Us
            </h5>
            <div className='d-flex gap-3 fs-4'>
              <a href="#" className='text-secondary transition-all hover-white'><FaInstagram /></a>
              <a href="#" className='text-secondary transition-all hover-white'><FaFacebook /></a>
              <a href="#" className='text-secondary transition-all hover-white'><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        <hr className='border-secondary my-4 opacity-25' />

        <p className='text-center text-secondary small mb-0'>
          Crafted with ❤️ in Kakkanad, Kerala
        </p>
      </div>
    </footer>
  )
}

export default Footer