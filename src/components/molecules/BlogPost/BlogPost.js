/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import { StyledBlogPost } from './BlogPost.styles';
import Card from '../Ul/Card/Card';
import blogPost from '../../../data/blog.json';

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
      <div className="blogPostContainer">
        <Card style={{ width: '100%' }}>
          <div className="blogHeader">
            <span className="blogCategory">Featured</span>
            <h1>{post.blogTitle}</h1>
            <span className="postedBy">
              posted onJuly 21, 2016 bySora Blogging Tips
            </span>
          </div>
          <div className="postImageContainer">
            <img src="/images/porto.jpg" alt="" />
          </div>
          <div className="post Content">
            <h3>Post Title</h3>
            <p>Lorem</p>
          </div>
        </Card>
      </div>
    </StyledBlogPost>
  );
};

export default BlogPost;
