import React from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';
import SubmissionToastProvider from './context/submissionContext';

function App() {
  return (
    <SubmissionToastProvider>
      <Header />
      <Container>
        <Content />
      </Container>
    </SubmissionToastProvider>
  );
}

export default App;
