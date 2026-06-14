import React from 'react'
import { IoDocumentTextOutline, IoDownload } from "react-icons/io5"
import { Link } from 'react-router-dom'

const Steps = () => {
  return (
    <div style={{ minHeight: '80vh' }} className='container my-5 d-flex flex-column justify-content-center'>
      <h1 className='text-center fw-extrabold mb-5 display-5 text-dark'> 
        Create an ATS Friendly Resume in Minutes with AI
      </h1>
      
      <div className='row g-4 justify-content-center px-2'>
        <div className='col-lg-5 col-md-6'>
          <div className='card border-0 rounded-4 p-5 shadow-sm text-center h-100 bg-white hover-translate transition-all'>
            <div className='d-inline-flex p-3 rounded-circle bg-primary bg-opacity-10 text-primary mb-4 mx-auto'>
              <IoDocumentTextOutline className='fs-1'/>
            </div>
            <h4 className='fw-bold text-dark mb-2'>Add Your Details</h4>
            <p className='text-muted flex-grow-1'>Our AI will instantly generate tailored Skills & Summaries for you.</p>
            <span className='badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold mt-3 align-self-center'>
              Step 1
            </span>
          </div>
        </div>
        
        <div className='col-lg-5 col-md-6'>
          <div className='card border-0 rounded-4 p-5 shadow-sm text-center h-100 bg-white hover-translate transition-all'>
            <div className='d-inline-flex p-3 rounded-circle bg-danger bg-opacity-10 text-danger mb-4 mx-auto'>
              <IoDownload className='fs-1'/>
            </div>
            <h4 className='fw-bold text-dark mb-2'>Download your Resume</h4>
            <p className='text-muted flex-grow-1'>Export a perfectly structured PDF and start applying right away.</p>
            <span className='badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill fw-bold mt-3 align-self-center'>
              Step 2
            </span>
          </div>
        </div>
      </div>

      <div className='text-center mt-5 pt-3'>
        <Link to="/form">
          <button 
            className='btn btn-lg text-white px-5 py-3 fw-bold text-uppercase shadow-sm' 
            style={{ 
              backgroundColor: '#a07855', 
              border: 'none', 
              borderRadius: '12px',
              letterSpacing: '1px',
              fontSize: '0.95rem'
            }}
          >
            Let's Start
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Steps