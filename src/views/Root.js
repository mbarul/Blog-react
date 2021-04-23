import React from 'react';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { StyledRoot } from './Root.styles';
import Home from '../containers/Home/Home';
import Header from '../components/molecules/Header/Header';

const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledRoot>
          <div className="App">
            <Header />
            <Home />
          </div>
        </StyledRoot>
      </ThemeProvider>
    </>
  );
};

export default Root;
