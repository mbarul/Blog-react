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
      <div className="blogPostContainer">
        <Card style={{ width: '100%' }}>
          <div className="blogHeader">
            <span>Featured</span>
            <h1>Beutiful is always beautiful</h1>
            <span>posted onJuly 21, 2016 bySora Blogging Tips</span>
          </div>
        </Card>
      </div>
    </StyledBlogPost>
  );
};

export default BlogPost;
