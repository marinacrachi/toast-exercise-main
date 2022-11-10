import React, { useState, createContext } from "react";

export const SubmissionContext = createContext();

export default function SubmissionToastProvider({ children }) {
  const [isToastOpen, setIsToastOpen] = useState(false);
//   const [currentSubmission, setCurrentSubmission] = useState({});
  const [likedSubmissions, setLikedSubmissions] = useState([]);

  const [currentSubmission, setCurrentSubmission] = useState({
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "johnDoe@gmail.com",
  });

  return (
    <SubmissionContext.Provider
      value={{
        likedSubmissions,
        setLikedSubmissions,
        isToastOpen,
        setIsToastOpen,
        currentSubmission,
        setCurrentSubmission,
      }}
    >
      {children}
    </SubmissionContext.Provider>
  );
}
