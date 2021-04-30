import styled from 'styled-components';

export const StyledPost = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  .sidebar {
    width: 28%;
    background: ${({ theme }) => theme.colors.lightGrey};
  }
`;
