import styled from 'styled-components';

export const StyledBlogPost = styled.div`
  width: 70%;
  background: ${({ theme }) => theme.colors.lightGrey};
  .blogHeader {
    text-align: center;
  }
  h1 {
    letter-spacing: 5px;
    transform: cap;
    font-size ${({ theme }) => theme.fontSize.xl}
  }
`;
