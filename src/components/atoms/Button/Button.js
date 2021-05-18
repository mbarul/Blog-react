import styled from 'styled-components';

export const Button = styled.button`
margin: 20px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  line-height: 1em;
  letter-spacing: 0.06em;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.l}
  text-decoration: none;
  display: inline-block;
  padding: 10px 10px 10px 10px;
  border-radius: 2px;
  border: none;
  transition: background-color 500ms;
  :hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    cursor: pointer;
  }
`;
