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
`;
