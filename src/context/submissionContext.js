import React, { useState, createContext, useEffect } from "react";
import { onMessage, fetchLikedFormSubmissions } from "../service/mockServer";
export const SubmissionContext = createContext();

export default function SubmissionToastProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [currentSubmission, setCurrentSubmission] = useState({});
  const [likedSubmissions, setLikedSubmissions] = useState([]);

  useEffect(() => {
    const getCurrentSubmission = () => {
      onMessage((message) => {
        setCurrentSubmission(message.data);
      });
    };
    getCurrentSubmission();
  }, [isToastOpen]);

  useEffect(() => {
    const getLikedSubmissions = async () => {
      try {
        const { formSubmissions } = await fetchLikedFormSubmissions();
        setLikedSubmissions(formSubmissions);
        setIsLoading(false);
      } catch (e) {
        alert('Oh no! There was an error fetching your liked submissions. Please try again.');
      }
    };
    getLikedSubmissions();
  }, [currentSubmission]);

  return (
    <SubmissionContext.Provider
      value={{
        likedSubmissions,
        setLikedSubmissions,
        isToastOpen,
        setIsToastOpen,
        currentSubmission,
        setCurrentSubmission,
        isLoading,
      }}
    >
      {children}
    </SubmissionContext.Provider>
  );
}
