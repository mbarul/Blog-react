import styled from 'styled-components';

export const PostedBy = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-style: italic;
  padding: 10px 0;
`;
