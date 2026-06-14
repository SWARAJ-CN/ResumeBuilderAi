import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDeleteForever, MdEmail, MdPhone } from "react-icons/md";
import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { deleteResume, getAllResume } from "../service/allApi";

const History = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate()

  const getallresume = async () => {
    try {
      const result = await getAllResume();
      setResults(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  
  
const handleDelete = async (id) => {
  if(window.confirm('Are you sure delete this resume')){
  try {
    await deleteResume(id);
    getallresume(); 
  } catch (error) {
    console.log(error);
  }
  return
}
};

  useEffect(() => {
    getallresume();
  }, []);

  return (
    <div className="container py-5">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h2 className="fw-bold mb-1">Resume History</h2>
          <p className="text-muted mb-0">
            View and manage all generated resumes
          </p>
        </div>

        <Link to="/form" className="btn btn-dark d-flex align-items-center gap-2">
        Create New One
          <IoArrowForward className="me-2" />
        </Link>
      </div>

      {results.length > 0 ? (
        <div className="row g-4">

          {results.map((item) => (
            <div className="col-lg-6" key={item.id}>

              <div
                className="card border-0 shadow-sm h-100"
                style={{
                  borderRadius: "20px",
                  transition: "0.3s"
                }}
              >
                <div className="card-body p-4">

                  {/* Top Section */}
                  <div className="d-flex justify-content-between align-items-start">

                    <div>
                      <h4 className="fw-bold mb-1">
                        {item.fullName}
                      </h4>

                      <p className="text-primary fw-semibold mb-0">
                        {item.jobTitle}
                      </p>

                      <small className="text-muted">
                        Created : {item.date}
                      </small>
                    </div>

                    <button onClick={()=>handleDelete(item.id)} className="btn btn-light text-danger">
                      <MdDeleteForever size={24} />
                    </button>

                  </div>

                  <hr />

                  {/* Contact */}
                  <div className="mb-3">
                    <h6 className="fw-bold">Contact</h6>

                    <p className="text-muted mb-1">
                      <MdEmail/> {item.email}
                    </p>

                    <p className="text-muted mb-1">
                      <MdPhone/> {item.contact}
                    </p>

                    <div className="d-flex gap-3 mt-2">
                      <span>
                        <FaLinkedin className="me-1 text-primary" />
                        LinkedIn
                      </span>

                      <span>
                        <FaGithub className="me-1" />
                        GitHub
                      </span>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-3">
                    <h6 className="fw-bold">Education</h6>

                    <p className="mb-1 fw-semibold">
                      {item.degree}
                    </p>

                    <small className="text-muted d-block">
                      {item.university}
                    </small>

                    <small className="text-muted">
                      Passout : {item.passout}
                    </small>
                  </div>

                  {/* Skills */}
                  <div className="mb-3">
                    <h6 className="fw-bold">Skills</h6>

                    <div className="d-flex flex-wrap gap-2">
                      {item.skills?.slice(0, 8).map((skill, index) => (
                        <span
                          key={index}
                          className="badge rounded-pill bg-dark px-3 py-2"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Summary */}
                  <div>
                    <h6 className="fw-bold">Summary</h6>

                    <p
                      className="text-muted mb-0"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.summary}
                    </p>
                  </div>

                </div>

                {/* Footer */}
                <div className="card-footer bg-white border-0 p-4 pt-0">
                  <button className="btn btn-dark w-100"
                  onClick={()=>navigate(`/view/${item.id}/resume`)}
                  >
                    <FaFileAlt className="me-2" />
                    View Resume
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>
      ) : (
        <div className="text-center py-5">

          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
            alt="No Resume"
            width="140"
          />

          <h3 className="fw-bold mt-4">
            No Resume Found
          </h3>

          <p className="text-muted">
            Create your first resume to see it here.
          </p>

          <Link to="/form" className="btn btn-dark mt-2">
            Create Resume
          </Link>

        </div>
      )}
    </div>
  );
};

export default History;