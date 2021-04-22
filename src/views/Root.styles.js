import styled from 'styled-components';

export const StyledRoot = styled.div`
  background-color: ${({ theme }) => theme.colors.warning};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
