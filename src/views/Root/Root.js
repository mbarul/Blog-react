import React from 'react';
import { GlobalStyle } from '../../assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../assets/styles/theme';
import { StyledRoot } from './Root.styles';
import Header from '../../components/molecules/Header/Header';
import Hero from '../../components/molecules/Hero/Hero';
import Contact from '../Contact/Contact';
import Post from '../Post/Post';
import Home from '../Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Root = () => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StyledRoot>
            <Header />
            <Hero />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/contact" component={Contact} exact />
              <Route path={`/post/:postId`} component={Post} exact />
            </Switch>
          </StyledRoot>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default Root;
