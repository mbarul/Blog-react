import React from 'react';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { StyledRoot } from './Root.styles';

const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledRoot>
          <div className="App">Marek</div>
        </StyledRoot>
      </ThemeProvider>
    </>
  );
};

export default Root;
