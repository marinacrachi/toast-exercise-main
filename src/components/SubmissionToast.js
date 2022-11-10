import React from "react";

import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function SubmissionToast({ isOpen, onClose }) {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={isOpen}
        autoHideDuration={5000}
        onClose={onClose}
        message={<div>
            <div>Form submission created!</div>
            <div>Form submission created!</div>
        </div>}
        action={
          <>
            <Button color="primary" size="small" onClick={onClose}>
              LIKE
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={onClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
}
