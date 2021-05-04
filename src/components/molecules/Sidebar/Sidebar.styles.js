import styled from 'styled-components';

export const StyledSidebar = styled.div`
  width: 28%;

  .cardHeader {
    background: ${({ theme }) => theme.colors.lightGrey};
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.fontSize.l};
    text-align: center;
    padding: 10px 0;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  .imageContainer {
    width: 100%;
    padding: 20px;
  }
  .imageContainer img {
    max-width: 100%;
    max-height: 100%;
    margin: 20px 0;
  }
`;
