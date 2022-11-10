import React, { useContext } from "react";

import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { SubmissionContext } from "../context/submissionContext";

export default function SubmissionToast() {

  const { isToastOpen, setIsToastOpen, currentSubmission } = useContext(SubmissionContext);

  const handleOnCloseToast  = (event, reason) => {
    setIsToastOpen(false);
  };

  const { firstName, lastName, email } = currentSubmission;
  
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={isToastOpen}
        autoHideDuration={5000}
        onClose={handleOnCloseToast}
        message={<div>
            <div>{firstName} {lastName}</div>
            <div>{email}</div>
        </div>}
        action={
          <>
            <Button color="primary" size="small" onClick={handleOnCloseToast}>
              LIKE
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleOnCloseToast}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
}
