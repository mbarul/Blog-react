import React, { useState, useEffect } from 'react';
import { StyledBlogHeader } from './BlogHeader.styles';
import { Title } from '../../atoms/Title/Title';
import { PostedBy } from '../../atoms/PostedBy/PostedBy';
import { BlogCategory } from '../../atoms/BlogCategory/BlogCategory';
import blogPost from '../../../data/blog.json';

/**
 * @author
 * @function BlogHeader
 * {post.blogTitle} - w tytule
 **/

const BlogHeader = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const postId = props.match.params.postId;
    const postText = blogPost.data.find((post) => post.id == postId);
    setPost(postText);
    console.log(post);
  });
  return (
    <StyledBlogHeader>
      <BlogCategory>{post.blogCategory}</BlogCategory>
      <Title>{post.blogTitle}</Title>
      <PostedBy>
        posted on {post.postedOn} by {post.author} Blogging Tips
      </PostedBy>
    </StyledBlogHeader>
  );
};

export default BlogHeader;
