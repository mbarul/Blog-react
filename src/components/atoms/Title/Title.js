import styled from 'styled-components';
/**
 * @author
 * @function Title
 **/

export const Title = styled.h1`
  letter-spacing: 5px;
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin: 0;
  font-weight: 400;
`;
