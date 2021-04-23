import styled from 'styled-components';

export const StyledHeader = styled.div`
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
  }

  .headerMenu a {
    display: inline-block;
    margin: 0px 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.m};
    letter-spacing: 1.2px;
  }
  .headerMenu a:hover {
    color: ${({ theme }) => theme.colors.grey};
  }
`;
