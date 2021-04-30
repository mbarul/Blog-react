import React from 'react';
import { StyledBlogPost } from './BlogPost.styles';
import Card from '../Ul/Card/Card';
/**
 * @author
 * @function BlogPost
 **/

const BlogPost = (props) => {
  return (
    <StyledBlogPost>
      <Card>My first blog post</Card>
    </StyledBlogPost>
  );
};

export default BlogPost;
