import React from 'react';
import { StyledGallaryPost } from './GallaryPost.styles';
import ImagesContainer from '../../molecules/ImagesContainer/ImagesContainer';
/**
 * @author
 * @function GallaryPost
 **/

const GallaryPost = (props) => {
  return (
    <StyledGallaryPost>
      <ImagesContainer />
    </StyledGallaryPost>
  );
};

export default GallaryPost;
