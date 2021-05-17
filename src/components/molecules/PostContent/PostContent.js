import React, { useState, useEffect } from 'react';
import { StyledPostContent } from './PostContent.styles';
import { Title } from '../../atoms/Title/Title';
import blogPost from '../../../data/blog.json';
import { Text } from '../../atoms/Text/Text';
import { ImageContainer } from '../../atoms/ImageContainer/ImageContainer';
/**
 * @author
 * @function PostContent
 **/

const PostContent = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const postId = props.match.params.postId;
    const postText = blogPost.data.find((post) => post.id == postId);
    setPost(postText);
    console.log(post);
  });
  return (
    <StyledPostContent>
      <ImageContainer>
        <img src={`/images/${post.blogImage}`} alt="" />
      </ImageContainer>
      <Title>{post.blogTitle}</Title>
      <Text>{post.blogText}</Text>
    </StyledPostContent>
  );
};

export default PostContent;
