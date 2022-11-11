import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { SubmissionContext } from "./context/submissionContext";
import SubmissionToast from "./components/SubmissionToast";

export default function Content() {
  const { likedSubmissions, isLoading } = useContext(SubmissionContext);
  console.log("likedSubmissions", likedSubmissions);
  return (
    <>
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="h4">Liked Form Submissions</Typography>

        <Typography variant="body1" sx={{ fontStyle: "italic", marginTop: 1 }}>
          {isLoading ? (
            "Loading..."
          ) : (
            <>
              {likedSubmissions.length === 0 ? (
                "No liked submissions yet"
              ) : (
                <>
                  {likedSubmissions.map((submission, index) => (
                    <div key={index}>
                      {submission.firstName} {submission.lastName}
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </Typography>
      </Box>
      <SubmissionToast />
    </>
  );
}
