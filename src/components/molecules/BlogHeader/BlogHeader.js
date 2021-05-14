import React from 'react';
import { StyledBlogHeader } from './BlogHeader.styles';
import { Title } from '../../atoms/Title/Title';
import { PostedBy } from '../../atoms/PostedBy/PostedBy';
import { BlogCategory } from '../../atoms/BlogCategory/BlogCategory';

/**
 * @author
 * @function BlogHeader
 * {post.blogTitle} - w tytule
 **/

const BlogHeader = (props) => {
  return (
    <StyledBlogHeader>
      <BlogCategory>Featured</BlogCategory>
      <Title>Marek</Title>
      <PostedBy>posted on July 21, 2016 bySora Blogging Tips</PostedBy>
    </StyledBlogHeader>
  );
};

export default BlogHeader;
