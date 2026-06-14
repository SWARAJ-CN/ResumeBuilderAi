import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

function Preview({userData}) {
  // Custom style to mimic a clean printed A4 document structure
  const resumeStyle = {
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    color: '#333333',
    maxWidth: '800px',
    backgroundColor: '#fff',
  };

  const sectionHeaderStyle = {
    fontSize: '1.1rem',
    fontWeight: '700',
    letterSpacing: '0.5px',
    color: '#1a252f',
    borderBottom: '2px solid #dee2e6',
    paddingBottom: '4px',
    marginBottom: '12px',
    marginTop: '20px',
    textTransform: 'uppercase'
  };

  return (
    <Container style={resumeStyle} className="py-4 px-3 border">
      {/* Header Section */}
      <div className="text-center mb-4">
        <h1 className="fw-bold mb-1" style={{ fontSize: '2.2rem', color: '#111' }}>
          {userData.fullName} 
        </h1>
        <h5 className="text-muted fw-semibold mb-3" style={{ letterSpacing: '1px' }}>
          {userData.jobTitle}
        </h5>
        
        {/* Contact Info Row */}
        <div className="d-flex flex-wrap justify-content-center gap-3 text-secondary (link-dark) small">
          <span className="d-flex align-items-center gap-1">
            <FaPhoneAlt className="text-dark" /> {userData.contact}
          </span>
          <span className="d-flex align-items-center gap-1">
            <FaEnvelope className="text-dark" /> {userData.email}
          </span>
          <span className="d-flex align-items-center gap-1">
            <FaMapMarkerAlt className="text-dark" /> {userData.location}
          </span>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-secondary text-decoration-none d-flex align-items-center gap-1 hover-dark">
            <FaLinkedin className="text-dark" /> {userData.linkedin}
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-secondary text-decoration-none d-flex align-items-center gap-1">
            <FaGithub className="text-dark" /> {userData.github}
          </a>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-3">
        <h3 style={sectionHeaderStyle}>Professional Summary</h3>
        <p className="text-muted dynamic-text" style={{ lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'justify' }}>
          
          {userData.summary}
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-3">
        <h3 style={sectionHeaderStyle}>Technical Skills</h3>
        <div className="d-flex flex-wrap gap-2 pt-1">
         
          {userData?.skills?.map((skill) => (
            <Badge 
              key={skill} 
              bg="light" 
              text="dark" 
              className="border px-3 py-2 fw-medium"
              style={{ fontSize: '0.85rem' }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-3">
        <h3 style={sectionHeaderStyle}>Education</h3>
        <Row className="align-items-start">
          <Col xs={9}>
            <h6 className="fw-bold mb-1" style={{ color: '#222' }}>
               
             {userData.degree}
            </h6>
            <div className="text-muted" style={{ fontSize: '0.9rem' }}>
              
               {userData.university}
            </div>
          </Col>
          <Col xs={3} className="text-end text-muted small fw-medium">
            
            {userData.passout}
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Preview;










// import React from 'react'
// import Divider from '@mui/material/Divider';
// import Button from '@mui/material/Button';


// function Preview() {
//   return (
//     <>
//       <div className="container">
//         <h2>Swaraj CN</h2>
//         <h4>Software Developer</h4>
//         <p>Phone: 8590053568</p>
//         <p>Email: swarajcn778@gmail.com</p>
//         <p>LinkedIn: abcd.com</p>
//         <p>Github: abcd.com</p>
//         <p>Location: kasaragod</p>
//         <Divider>Professional Summary</Divider>
//         <p>Backend developer experienced in building secure and scalable server-side applications. Skilled in REST API development, database management, and ensuring application performance and reliability.</p>
//           <Divider>Technical Skills</Divider>
//           <Button variant="text">HTML</Button>
//           <Button variant="text">CSS</Button>
//           <Button variant="text">JAVA SCRIPT</Button>
//           <Divider>Education</Divider>
//           <p>Bachelor’s Degree in Bachelor's of Computer Application</p>
//           <p>University/College Name : Kannur University</p>
//           <p>Year of Graduation : 2023 - 26</p>
//       </div>
//     </>
//   )
// }

// export default Preview

