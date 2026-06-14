import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { jobRoles } from "../assets/jobRole.json";
import jobSKills from "../assets/jobSkills.json";
import summary from "../assets/summaries.json";
import Swal from "sweetalert2";
import { addResumeAPI } from "../service/allApi";
import { useNavigate } from "react-router-dom";

const steps = [
  "Basic Informationals",
  "Contact Details",
  "Educational Details",
  "Review & Submit",
];

const UserInputs = ({ userData, setUserData }) => {

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const navigate = useNavigate()

  const generateAIData = () => {
    setUserData({
      ...userData,
      skills: jobSKills[userData.jobTitle],
      summary: summary[userData.jobTitle],
    });

    handleNext();
  };

  console.log(userData);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  //handleResumeAdd

const handleResumeAdd = async () => {
    const {
      fullName,
      location,
      jobTitle,
      email,
      contact,
      linkedin,
      github,
      degree,
      university,
      passout,
      skills,
      summary,
    } = userData;

    if (
      fullName &&
      location &&
      jobTitle &&
      email &&
      contact &&
      linkedin &&
      github &&
      degree &&
      university &&
      passout &&
      skills.length != 0 &&
      summary
    ) {
      // alert('Ready for Api call')
      try {

        const result = await addResumeAPI(userData)
        console.log(result);
        
        Swal.fire({
        title: "Resume Added Successfully",
        text: "Click the ok button view  the resume",
        icon: "success",
      });
       const id =  result.data.id
       navigate(`/view/${id}/resume`)
      } catch (error) {
        console.log(error);
        
      }
    } else {
      // alert ('fill the form completly')
      Swal.fire({
        icon: "error",
        title: "Oops...Something went wrong!",
        text: "fill the form completly",
      });
     
    }
  };

  const renderStepContent = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <div>
            <h1>Personal details</h1>
            <div className="p-3 row gap-3">
              <TextField
                value={userData.fullName}
                onChange={(e) =>
                  setUserData({ ...userData, fullName: e.target.value })
                }
                id="filled-basic"
                label="Full Name"
                variant="filled"
              />
              <TextField
                value={userData.location}
                onChange={(e) =>
                  setUserData({ ...userData, location: e.target.value })
                }
                id="filled-basic"
                label="Location"
                variant="filled"
              />

              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Choose Job Title
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  onChange={(e) =>
                    setUserData({ ...userData, jobTitle: e.target.value })
                  }
                >
                  {/* <MenuItem value="">
                      <em>None</em>
                    </MenuItem> */}

                  {jobRoles.map((value, index) => (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        );

      case 1:
        return (
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
                value={userData.linkedin}
                onChange={(e) =>
                  setUserData({ ...userData, linkedin: e.target.value })
                }
                id="filled-basic"
                label="Linked In"
                variant="filled"
              />
              <TextField
                value={userData.github}
                onChange={(e) =>
                  setUserData({ ...userData, github: e.target.value })
                }
                id="filled-basic"
                label="Git Hub"
                variant="filled"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h1>Educational details</h1>
            <div className="p-3 row gap-3">
              <TextField
                value={userData.degree}
                onChange={(e) =>
                  setUserData({ ...userData, degree: e.target.value })
                }
                id="filled-basic"
                label="Bachelor's Degree"
                variant="filled"
              />
              <TextField
                value={userData.university}
                onChange={(e) =>
                  setUserData({ ...userData, university: e.target.value })
                }
                id="filled-basic"
                label="University/College Name"
                variant="filled"
              />
              <TextField
                value={userData.passout}
                onChange={(e) =>
                  setUserData({ ...userData, passout: e.target.value })
                }
                id="filled-basic"
                label="Year of Gradution"
                variant="filled"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h1>Revie & submit</h1>
            <p>
              Our AI will generate Skills & Summary according to your job role.
              Click the Generate AI Skill & Summary button to Proceed.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={handleResumeAdd}>Finish</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>{renderStepContent(activeStep)}</Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button> */}

            {activeStep === steps.length - 1 ? (
              <Button
                color="primary"
                variant="contained"
                onClick={handleNext}
                sx={{ mr: 1 }}
                onClick={generateAIData}
              >
                Generate AI Skills & summary
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default UserInputs;
