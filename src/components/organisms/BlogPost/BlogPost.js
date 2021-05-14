/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import { StyledBlogPost } from './BlogPost.styles';
import Card from '../../molecules/Card/Card';
import blogPost from '../../../data/blog.json';
import ImageContainer from '../../atoms/ImageContainer/ImageContainer';
import BlogHeader from '../../molecules/BlogHeader/BlogHeader';
import PostContent from '../../molecules/PostContent/PostContent';
import Post from 'views/Post/Post';

/**
 * @author
 * @function BlogPost
 **/

const BlogPost = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const postId = props.match.params.postId;
    const postText = blogPost.data.find((post) => post.id == postId);
    setPost(postText);
    console.log(post);
  });

  return (
    <StyledBlogPost>
      <Card style={{ width: '100%' }}>
        <BlogHeader />
        <ImageContainer />
        <PostContent />
      </Card>
    </StyledBlogPost>
  );
};

export default BlogPost;
