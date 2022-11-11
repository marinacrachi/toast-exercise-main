import React, { useContext } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { createMockFormSubmission } from "./service/mockServer";
import { SubmissionContext } from "./context/submissionContext";

export default function Header() {
  const { isToastOpen, setIsToastOpen } = useContext(SubmissionContext);

  const handleClick = () => {
    createMockFormSubmission();
    setIsToastOpen(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: `linear-gradient(
    218.67deg,
    #4361ee 12.63%,
    #3f37c9 48.24%,
    #7209b7 97.22%
  );`,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Toast Exercise
          </Typography>
          <Button
            variant="contained"
            size="medium"
            disabled={isToastOpen}
            onClick={handleClick}
            sx={{
              background: "#fff",
              color: "#603eff",
              "&:hover": {
                opacity: 0.5,
                transition: "0.2s ease-in-out",
                background: "#fff",
                cursor: "pointer",
              },
            }}
          >
            New Submission
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
