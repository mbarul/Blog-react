import React from 'react';
import Card from '../Card/Card';
import { ImageContainer } from '../../atoms/ImageContainer/ImageContainer';
import { Title } from '../../atoms/Title/Title';
import { PostedBy } from '../../atoms/PostedBy/PostedBy';
import { BlogCategory } from 'components/atoms/BlogCategory/BlogCategory';
import { Button } from '../../atoms/Button/Button';
import { Text } from '../../atoms/Text/Text';
import { StyledRecentPosts } from './RecentPost.styles';

const RecentPosts = (props) => {
  return (
    <StyledRecentPosts>
      <Card style={{ marginBottom: '20px 0', textAlign: 'center' }}>
        <ImageContainer style={{ padding: '20px 10px 0px 10px' }}>
          <img src="/images/porto.jpg" alt="" />
        </ImageContainer>
        <BlogCategory>Featured</BlogCategory>
        <Title>Hahahah</Title>
        <PostedBy>date</PostedBy>
        <Text>Lorem..................</Text>
        <Button>Read more</Button>
      </Card>
    </StyledRecentPosts>
  );
};

export default RecentPosts;
