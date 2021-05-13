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
  }, [props.match.params.postId, post]);

  return (
    <StyledBlogPost>
      <div className="blogPostContainer">
        <Card style={{ width: '100%' }}>
          <div className="blogHeader">
            <span className="blogCategory">{post.blogCategory}</span>
            <h1>{post.blogTitle}</h1>
            <span className="postedBy">
              posted {post.postedOn} by {post.author}
            </span>
          </div>
          <div className="postImageContainer">
            <img src={`/images/${post.blogImage}`} alt="" />
          </div>
          <div className="post Content">
            <h3>{post.blogTitle}</h3>
            <p>{post.blogText}</p>
          </div>
        </Card>
      </div>
    </StyledBlogPost>
  );
};

export default BlogPost;
