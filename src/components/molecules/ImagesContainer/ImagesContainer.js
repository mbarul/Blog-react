import React from 'react';
import { StyledImagesContainer } from './ImagesContainer.styles';
import { ImageContainer } from '../../atoms/ImageContainer/ImageContainer';
/**
 * @author
 * @function ImagesContainer
 **/

const ImagesContainer = (props) => {
  return (
    <StyledImagesContainer>
      <section>
        <ImageContainer />
      </section>
      <section>
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
      </section>
    </StyledImagesContainer>
  );
};

export default ImagesContainer;
