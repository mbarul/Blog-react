import styled from 'styled-components';

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: justify;
  padding: 10px;
`;
