import React from 'react';
import { StyledImageContainer } from './ImageContainer.styles';
/**
 * @author
 * @function ImageContainer
 **/

const ImageContainer = (props) => {
  return (
    <StyledImageContainer>
      <img src="/images/porto.jpg" alt="" />
    </StyledImageContainer>
  );
};

export default ImageContainer;
