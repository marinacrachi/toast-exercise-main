import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import CircularProgress from '@mui/material/CircularProgress';

import { SubmissionContext } from "./context/submissionContext";
import SubmissionToast from "./components/SubmissionToast";

export default function Content() {
  const { likedSubmissions, isLoading } = useContext(SubmissionContext);

  return (
    <>
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="h3">Liked Form Submissions</Typography>
        <Typography variant="body1" sx={{ fontStyle: "bold", marginTop: 2 }}>
          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
          ) : (
            <>
              {likedSubmissions.length === 0 ? (
                "No liked submissions yet"
              ) : (
                <>
                  {likedSubmissions.map(
                    ({ firstName, lastName, email, id }, index) => (
                      <Tooltip title={email} placement="right">
                        <Box
                          key={id}
                          sx={{
                            width: 'fit-content',
                            marginTop: 1,
                            fontSize: 20,
                            "&:hover": {
                              transition: "0.2s ease-in-out",
                              color: "#e28f44",
                            },
                          }}
                        >
                          {index + 1}. {firstName} {lastName}
                        </Box>
                      </Tooltip>
                    )
                  )}
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
