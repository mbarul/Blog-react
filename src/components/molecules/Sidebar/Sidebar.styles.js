import styled from 'styled-components';

export const StyledSidebar = styled.div`
  width: 28%;

  .cardHeader {
    background: ${({ theme }) => theme.colors.lightGrey};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSize.l};
    text-align: center;
    padding: 10px 0;
    letter-spacing: 1px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
  }
  .imageContainer {
    width: 100%;
    padding: 10px;
  }
  .imageContainer img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 1%;
    margin: 20px 0px;
  }
  .personalBio {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: 300;
  }
  .recentPosts {
    padding: 20px;
  }
  .recentPost {
    border-bottom: 3px solid ${({ theme }) => theme.colors.lightPurple};
    margin: 0px 20px 20px 20px;
  }
  .recentPost h3 {
    margin: 0px;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: capitalize;
  }
  .recentPost span {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
