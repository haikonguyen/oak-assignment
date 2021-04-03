import React, { FC } from 'react';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContent } from './components/AppContent/app-content.component';
import { GlobalStyle } from './components/GlobalStyle/global-style.component';

const StyledApp = styled.div`
  height: 100vh;
  background: #dbdbdb;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App: FC = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <AppContent />
    </StyledApp>
  );
};

export default App;
