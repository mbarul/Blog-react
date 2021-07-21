import styled from 'styled-components';

export const StyledSearchButton = styled.div`
  form {
    display: flex;
    margin: 0 10px;
  }
  form button {
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
