import React from 'react';
import { StyledGallaryPost } from './GallaryPost.styles';
import ImagesContainer from '../../molecules/ImagesContainer/ImagesContainer';
import Card from '../Card/Card';
/**
 * @author
 * @function GallaryPost
 **/

const GallaryPost = (props) => {
  return (
    <StyledGallaryPost>
      <Card>
        <ImagesContainer />
      </Card>
    </StyledGallaryPost>
  );
};

export default GallaryPost;
