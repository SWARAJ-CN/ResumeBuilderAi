import React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Tooltip from "@mui/material/Tooltip"
import { Link, useNavigate } from "react-router-dom"
import { MdHistory } from "react-icons/md"

const Header = () => {
  const navigate = useNavigate()
  
  const aboutText = "Our AI Resume Builder suggests job-specific keywords, professional summaries, and skill recommendations to make resumes more effective and ATS-friendly. It simplifies the creation process, helping job seekers build well-structured resumes in minutes with easy PDF downloads."

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black", px: { xs: 1, md: 3 } }}>
        <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
          
          <Typography 
            onClick={() => navigate('/')} 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: "bold", 
              letterSpacing: "1px", 
              cursor: "pointer",
              userSelect: "none"
            }}
          >
            Resume Builder.ai
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 3, sm: 4 } }}>
            <Link 
              to="/history" 
              className="text-white text-decoration-none d-flex align-items-center gap-1 fw-medium"
              style={{ fontSize: "0.95rem" }}
            >
              History <MdHistory className="fs-5" />
            </Link>

            <Tooltip title={aboutText} arrow placement="bottom-end">
              <Typography 
                component="span" 
                sx={{ 
                  color: "white", 
                  cursor: "pointer", 
                  fontSize: "0.95rem", 
                  fontWeight: 500,
                  opacity: 0.85,
                  transition: "opacity 0.2s",
                  "&:hover": { opacity: 1 }
                }}
              >
                ABOUT US
              </Typography>
            </Tooltip>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header