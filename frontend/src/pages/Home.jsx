import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const testimonialImages = Array(12).fill("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

  return (
    <>
      <div 
        style={{
          height: "100vh",
          backgroundImage: 'url("https://isynergy.io/wp-content/uploads/A-robot-writer-representing-the-AI-tools-for-content-writing-1030x577.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className='d-flex justify-content-center align-items-center'
      >
        <div className='row container-fluid justify-content-center'>
          <div className='col-lg-6 col-md-8 rounded shadow p-5 text-center text-light' style={{ backgroundColor: "rgba(151,152,143,0.7)" }}>
            <h3> 
              Design To Get Hired. <br />
              Your Skill, Your Story, <br />
              Your Next Job - All In One.
            </h3>
            <Link to="/steps" style={{ backgroundColor: "black" }} className='btn text-light mt-3'>
              Make Your Resume
            </Link>
          </div>
        </div>
      </div>

      <div className='container mb-5'>
        <h1 className='text-center my-5 font-bolder'>What's Ai ResumeBuilder</h1>
        <div className='row align-items-center'>
          <div className='col-md-6 px-4'>
            <p>An AI ResumeBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>
            <p>The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly.</p>
            <p>The main goal of the AI ResumeBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.</p>
            <p>This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</p>
          </div>
          <div className='col-md-6 px-4'>
            <img 
              src="https://img.magnific.com/free-photo/startup-hr-worker-identifying-right-candidates-job-opening-reviewing-resume_482257-125564.jpg?semt=ais_hybrid&w=740&q=80" 
              alt="HR reviewing resume" 
              className="w-100 rounded"
              style={{ height: "500px", objectFit: "cover" }} 
            />
          </div>
        </div>
      </div>

      <div style={{ 
        backgroundImage: 'url("https://wordhero.co/wp-content/uploads/2024/08/How-Does-AI-Improve-Your-Writing-1080x675.png")', 
        height: '80vh', 
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundAttachment: 'fixed' 
      }} />

      <div className='container mb-5'>
        <h1 className='text-center my-5'>Testimony</h1>
        <div className='row align-items-center'>
          <div className='col-lg-6 px-4'>
            <h5>Trusted by professionals worldwide.</h5>
            <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>

          <div className='col-lg-6 px-4'>
            <div className='row g-2'>
              {testimonialImages.map((src, index) => (
                <div key={index} className='col-3'>
                  <img src={src} className='w-100 rounded' alt={`User testimonial ${index + 1}`} />  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home