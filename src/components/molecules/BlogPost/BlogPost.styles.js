import styled from 'styled-components';

export const StyledBlogPost = styled.div`
  width: 70%;
  background: ${({ theme }) => theme.colors.lightGrey};
  .blogHeader {
    text-align: center;
  }
  .blogCategory {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSize.l};
    padding: 10px 0;
  }
  h1 {
    letter-spacing: 5px;
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 0;
    font-weight: 400;
  }
  .postedBy {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-style: italic;
    padding: 10px 0;
  }
  .postImageContainer {
    width: 100%;
    padding: 30px;
  }
  .postImageContainer img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 1%;
    margin: 20px 0px;
  }
`;
