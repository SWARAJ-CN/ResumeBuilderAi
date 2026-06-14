import React, { useRef } from "react";
import { FaUserEdit } from "react-icons/fa";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { display, height, maxHeight } from "@mui/system";
import { jobRoles } from "../assets/jobRole.json";
import { updateResume } from "../service/allApi";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxHeight: "80vh",
  overflow: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  "&::-webkit-scrollbar": {
    display: "none",
  },
};
const Edit = ({ userData, setUserData, Id }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const skillRef = useRef();

  const addSkill = (skill) => {
    if (skill) {
      if (
        userData?.skills
          ?.map((item) => item.toLowerCase())
          ?.includes(skill.toLowerCase())
      ) {
        alert(`${skill}already exists`);
      } else {
        setUserData({ ...userData, skills: [...userData.skills, skill] });
      }
    } else {
      alert("enter skill");
    }
  };

  const handleSkills = (skill) => {
    setUserData({
      ...userData,
      skills: userData?.skills?.filter((item) => item != skill),
    });
  };

  // update data
  const HandleUpdate = async () => {
    const hasEmptyField = Object.values(userData).some(
      (value) =>
        value === null || value === undefined || String(value).trim() === "",
    );

    if (hasEmptyField) {
      Swal.fire({
        title: "Error",
        text: "Please fill out all fields.",
        icon: "error",
      });

      return; // Stop the execution
    }

    try {
      const datas = await updateResume(Id, userData);

      if (datas.status >= 200 && datas.status <= 300) {
        handleClose();
        Swal.fire({
          title: "Resume Updated",
          icon: "success",
          draggable: true,
        });
      } else {
      }

      console.log(datas);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <button onClick={handleOpen} className="btn ds-2 me-2">
          {" "}
          <FaUserEdit />{" "}
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h3" component="h2">
              EDIT RESUME DETAILS
            </Typography>
            <hr />
            <Box>
              <div>
                <h3>Personal details</h3>
                <div className="p-3 row gap-3">
                  <TextField
                    id="filled-basic"
                    label="Full Name"
                    variant="filled"
                    value={userData.fullName}
                    onChange={(e) =>
                      setUserData({ ...userData, fullName: e.target.value })
                    }
                  />
                  <TextField
                    id="filled-basic"
                    label="Location"
                    variant="filled"
                    value={userData.location}
                    onChange={(e) =>
                      setUserData({ ...userData, location: e.target.value })
                    }
                  />

                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Choose Job Title
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      // value={userData.jobTitle}
                      value={userData.jobTitle}
                      onChange={(e) =>
                        setUserData({ ...userData, jobTitle: e.target.value })
                      }
                    >
                      {jobRoles.map((job, index) => (
                        <MenuItem key={index} value={job}>
                          {job}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </Box>

            <div>
              <h1>Contcat details</h1>
              <div className="p-3 row gap-3">
                <TextField
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  id="filled-basic"
                  label="Email"
                  variant="filled"
                />
                <TextField
                  value={userData.contact}
                  onChange={(e) =>
                    setUserData({ ...userData, contact: e.target.value })
                  }
                  id="filled-basic"
                  label="Contact"
                  variant="filled"
                />
                <TextField
                  id="filled-basic"
                  label="Linked In"
                  variant="filled"
                  value={userData.linkedin}
                  onChange={(e) =>
                    setUserData({ ...userData, linkedin: e.target.value })
                  }
                />
                <TextField
                  value={userData.github}
                  id="filled-basic"
                  label="Git Hub"
                  variant="filled"
                  onChange={(e) =>
                    setUserData({ ...userData, github: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <h1>Educational details</h1>
              <div className="p-3 row gap-3">
                <TextField
                  id="filled-basic"
                  label="Bachelor's Degree"
                  variant="filled"
                  value={userData.degree}
                  onChange={(e) =>
                    setUserData({ ...userData, degree: e.target.value })
                  }
                />
                <TextField
                  id="filled-basic"
                  label="University/College Name"
                  variant="filled"
                  value={userData.university}
                  onChange={(e) =>
                    setUserData({ ...userData, university: e.target.value })
                  }
                />
                <TextField
                  id="filled-basic"
                  label="Year of Gradution"
                  variant="filled"
                  value={userData.passout}
                  onChange={(e) =>
                    setUserData({ ...userData, passout: e.target.value })
                  }
                />
              </div>

              <div className="mt-3">
                <h3>SKILLS</h3>
                <div className="d-flex justify-content-between align-items-center">
                  <input
                    type="text"
                    placeholder="Add Skill"
                    className="form-control"
                    ref={skillRef}
                  />
                  <button
                    onClick={() => addSkill(skillRef.current.value)}
                    className="btn btn-primary ms-2"
                  >
                    addskill
                  </button>
                </div>
                <div>
                  {userData?.skills?.map((skill, index) => (
                    <span key={index} className="border">
                      {skill}
                      <Button
                        onClick={() => handleSkills(skill)}
                        variant="text"
                      >
                        x
                      </Button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <h3>Summary</h3>

              <TextField
                id="filled-basic"
                label="Summary"
                variant="filled"
                className="w-100"
                value={userData.summary}
                onChange={(e) =>
                  setUserData({ ...userData, summary: e.target.value })
                }
              />
            </div>
            <div className="d-flex justify-content-end mt-4">
              <button
                onClick={HandleUpdate}
                className="btn"
                style={{ backgroundColor: "black", color: "white" }}
              >
                Update
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Edit;
