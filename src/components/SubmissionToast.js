import React, { useContext, useCallback, useState } from "react";

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
  const [isSavingSubmission, setIsSavingSubmission] = useState(false);

  const handleCloseToast = useCallback(() => {
    setIsToastOpen(false);
    setCurrentSubmission({});
    setIsSavingSubmission(false);
  }, [setCurrentSubmission, setIsToastOpen]);

  const handleLikeSubmission = useCallback(async () => {
    try {
      setIsSavingSubmission(true);
      await saveLikedFormSubmission({ ...currentSubmission, liked: true });
      handleCloseToast();
    } catch (error) {
      setIsSavingSubmission(false);
      alert('Oh no! There was an error liking this submission. Please try again.');
    }
  }, [currentSubmission, handleCloseToast]);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={isToastOpen}
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
            <Button
              color="primary"
              size="small"
              disabled={isSavingSubmission}
              onClick={handleLikeSubmission}
            >
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
