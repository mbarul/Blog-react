import styled from 'styled-components';

export const StyledNavbar = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;

  ul {
    margin: 0;
    padding: 0;
  }
  ul li {
    list-style: none;
    display: inline-block;
  }
  ul li a {
    padding: 0 10px;
    text-decoration: none;
    display: block;
    font-size: ${({ theme }) => theme.fontSize.l};
    text-transform: capitalize;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  .search form {
    display: flex;
    margin: 0 10px;
  }
  .search form button {
    border: none;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
    cursor: pointer;
  }
  .searchInput {
    border: 0;
    width: 0px;
    transition: width 0.2s ease-in;
  }
  .searchInput.active {
    width: 150px;
  }
  .searchInput:focus {
    outline: none;
  }
`;
