import React from 'react';
import { StyledPost } from './Post.styles';
import BlogPost from '../../components/molecules/BlogPost/BlogPost';
import Sidebar from '../../components/molecules/Sidebar/Sidebar';
/**
 * @author
 * @function Post
 **/

const Post = (props) => {
  return (
    <StyledPost>
      <BlogPost {...props} />
      <Sidebar />
    </StyledPost>
  );
};

export default Post;
