import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import { ImageContainer } from '../../atoms/ImageContainer/ImageContainer';
import { Title } from '../../atoms/Title/Title';
import { PostedBy } from '../../atoms/PostedBy/PostedBy';
import { BlogCategory } from '../../atoms/BlogCategory/BlogCategory';
import { Button } from '../../atoms/Button/Button';
import { Text } from '../../atoms/Text/Text';
import { StyledRecentPosts } from './RecentPost.styles';
import blogPost from '../../../data/blog.json';

const RecentPosts = (props) => {
  const [readMore, setReadMore] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
    console.log(posts);
  }, [posts]);
  const extraContent = (
    <div>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        consectetur nequeab porro quasi culpa nulla rerum quis minus
        voluptatibus sed hic ad quo sint, libero commodi officia aliquam! Maxime
      </Text>
    </div>
  );
  const linkName = readMore ? 'ReadLess <<' : 'Read More >>';

  return (
    <StyledRecentPosts>
      {posts.map((post) => {
        return (
          <>
            {' '}
            <Card
              style={{
                marginBottom: '20px 0',
                textAlign: 'center',
                marginBottom: '10px',
              }}
            >
              <ImageContainer style={{ padding: '20px 10px 0px 10px' }}>
                <img src={`/images/${post.blogImage}`} alt="" />
              </ImageContainer>
              <Title>{post.blogTitle}</Title>
              <PostedBy>{post.postedOn}</PostedBy>
              <BlogCategory>{post.BlogCategory}</BlogCategory>
              <Text>{post.blogText}.</Text>
              {readMore && extraContent}
              <Button
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                {linkName}
              </Button>
            </Card>
          </>
        );
      })}
    </StyledRecentPosts>
  );
};

export default RecentPosts;
