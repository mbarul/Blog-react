import React from 'react';
import { StyledGalleryPost } from './GalleryPost.styles';
import ImagesContainer from '../ImagesContainer/ImagesContainer';
import Card from '../Card/Card';
/**
 * @author
 * @function GalleryPost
 **/

const GalleryPost = (props) => {
  return (
    <StyledGalleryPost>
      <Card>
        <ImagesContainer />
      </Card>
    </StyledGalleryPost>
  );
};

export default GalleryPost;
