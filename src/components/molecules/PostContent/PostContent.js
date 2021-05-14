import React from 'react';
import { StyledPostContent } from './PostContent.styles';
import { Title } from '../../atoms/Title/Title';
/**
 * @author
 * @function PostContent
 **/

const PostContent = (props) => {
  return (
    <StyledPostContent>
      <Title>Post title</Title>
      <p>Lorem</p>
    </StyledPostContent>
  );
};

export default PostContent;
