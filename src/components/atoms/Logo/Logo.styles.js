import styled from 'styled-components';

export const StyledLogo = styled.div`
  .logo {
    text-align: center;
  }
  .logo a {
    font-family: 'Dancing Script', cursive;
    font-size: 50px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
  }
`;
