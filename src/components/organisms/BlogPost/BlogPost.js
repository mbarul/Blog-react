/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { StyledBlogPost } from './BlogPost.styles';
import Card from '../../molecules/Card/Card';
import BlogHeader from '../../molecules/BlogHeader/BlogHeader';
import PostContent from '../../molecules/PostContent/PostContent';

/**
 * @author
 * @function BlogPost
 **/

const BlogPost = (props) => {
  return (
    <StyledBlogPost>
      <BlogHeader {...props} />
      <PostContent {...props} />
    </StyledBlogPost>
  );
};

export default BlogPost;
