import styled from 'styled-components';

export const StyledNavbar = styled.div`
  .navbar {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
  }
  .navbar ul {
    margin: 0;
    padding: 0;
  }
  .navbar ul li {
    list-style: none;
    display: inline-block;
  }
  .navbar ul li a {
    padding: 0 10px;
    text-decoration: none;
    display: block;
    font-size: ${({ theme }) => theme.fontSize.l};
    text-transform: capitalize;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  .search {
    display: flex;
    margin: 0 10px;
  }
`;
