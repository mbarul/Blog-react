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
        <ImageContainer>
          <img src="/images/porto.jpg" alt="" />
        </ImageContainer>
      </section>
      <section>
        <ImageContainer>
          <img src="/images/porto.jpg" alt="" />
        </ImageContainer>
        <ImageContainer>
          <img src="/images/porto.jpg" alt="" />
        </ImageContainer>
        <ImageContainer>
          <img src="/images/porto.jpg" alt="" />
        </ImageContainer>
      </section>
    </StyledImagesContainer>
  );
};

export default ImagesContainer;
