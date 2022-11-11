import React, { useState, createContext, useEffect } from "react";
import { onMessage, fetchLikedFormSubmissions } from "../service/mockServer";
export const SubmissionContext = createContext();

export default function SubmissionToastProvider({ children }) {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [currentSubmission, setCurrentSubmission] = useState({});
  const [likedSubmissions, setLikedSubmissions] = useState([]);

  useEffect(() => {
    const getCurrentSubmission = () => {
        onMessage(message => {
            setCurrentSubmission(message.data);
        });
    };
    getCurrentSubmission();
  }, [isToastOpen])

  useEffect(() => {
    const getLikedSubmissions = async () => {
        const { formSubmissions } = await fetchLikedFormSubmissions();
        setLikedSubmissions(formSubmissions);
    };
    getLikedSubmissions();
  }, [currentSubmission])

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
