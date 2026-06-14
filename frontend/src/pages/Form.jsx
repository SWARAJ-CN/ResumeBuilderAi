import React, { useState } from "react"
import UserInputs from "../components/UserInputs"
import Preview from "../components/Preview"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Form = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    location: "",
    jobTitle: "",
    email: "",
    contact: "",
    linkedin: "",
    github: "",
    degree: "",
    university: "",
    passout: "",
    skills: [],
    summary: "",
    date: new Date().toLocaleDateString()
  })

  return (
    <div className="container-fluid min-vh-100 py-4 px-md-5 bg-light bg-opacity-25">
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm rounded-4 p-3 p-md-4 bg-white">
            <UserInputs userData={userData} setUserData={setUserData} />
          </div>
        </div>

        <div className="col-lg-6 position-sticky top-0" style={{ maxHeight: 'calc(100vh - 2rem)' }}>
          {userData.fullName.trim() ? (
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white h-100 overflow-auto">
              <Preview userData={userData} />
            </div>
          ) : (
            <div className="card border-0 shadow-sm rounded-4 p-5 bg-white d-flex flex-column align-items-center justify-content-center text-center h-100 min-vh-50">
              <div style={{ maxWidth: "320px", width: "100%" }}>
                <DotLottieReact
                  src="https://lottie.host/efbe0a6b-c17c-4fed-a67f-6123c64d69c7/70jvq0mWZb.lottie"
                  loop
                  autoplay
                  className="w-100 h-auto"
                />
              </div>
              <span 
                className="px-4 py-2 rounded-pill fw-medium border small"
                style={{ 
                  color: "#a07855", 
                  backgroundColor: "rgba(160, 120, 85, 0.08)", 
                  borderColor: "rgba(160, 120, 85, 0.2)" 
                }}
              >
                Fill out your details to unlock your live preview 🤖
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Form