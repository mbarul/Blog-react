import styled from 'styled-components';

export const StyledImagesContainer = styled.section`
  display: flex;
  flex-direction: row;
  object-fit: cover;
  margin: 5px;

  section {
    margin: 5px;
  }
  section:first-child {
    width: 70%;
    img {
      height: 312px;
      object-fit: cover;
    }
  }
  section:last-child {
    display: flex;
    flex-direction: column;
    width: 28%;
    justify-content: space-between;
  }
  img {
    height: 100px;
    object-fit: cover;
  }
`;
