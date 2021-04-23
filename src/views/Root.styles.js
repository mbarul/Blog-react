import styled from 'styled-components';

export const StyledRoot = styled.div`
  width: 90%;
  margin: 0 auto;
  border: solid 1px ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
