import styled from 'styled-components';

export const StyledBlogPost = styled.div`
  width: 70%;
  background: ${({ theme }) => theme.colors.lightGrey};
  img {
    padding: 10px;
  }
`;
