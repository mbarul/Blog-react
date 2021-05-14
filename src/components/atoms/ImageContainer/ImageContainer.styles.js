import styled from 'styled-components';
import ImageContainer from './ImageContainer';

export const StyledImageContainer = styled.div`
  width: 100%;
  padding: 30px;
  p {
    color: red;
  }
  ${ImageContainer} img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 1%;
    margin: 20px 0px;
  }
`;
