import React, { useContext, useCallback } from "react";

import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { saveLikedFormSubmission } from "../service/mockServer";
import { SubmissionContext } from "../context/submissionContext";

export default function SubmissionToast() {
  const {
    isToastOpen,
    setIsToastOpen,
    currentSubmission,
    setCurrentSubmission,
  } = useContext(SubmissionContext);
  const { firstName, lastName, email } = currentSubmission;

  const handleCloseToast = useCallback(() => {
    setIsToastOpen(false);
    setCurrentSubmission({});
  }, [setCurrentSubmission, setIsToastOpen]);

  const handleLikeSubmission = useCallback(async () => {
    console.log("liked");
    await saveLikedFormSubmission({ ...currentSubmission, liked: true });
    setIsToastOpen(false);
    setCurrentSubmission({});
  }, [currentSubmission, setCurrentSubmission, setIsToastOpen]);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={isToastOpen}
        autoHideDuration={5000}
        onClose={handleCloseToast}
        message={
          <div>
            <div>
              {firstName} {lastName}
            </div>
            <div>{email}</div>
          </div>
        }
        action={
          <>
            <Button color="primary" size="small" onClick={handleLikeSubmission}>
              LIKE
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseToast}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
}
