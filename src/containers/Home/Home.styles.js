import styled from 'styled-components';
export const StyledHome = styled.div`
  .gallaryPost {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-height: 450px;
  }
  .gallaryPost section:first-child {
    width: 70%;
  }
  .gallaryPost section:last-child {
    width: 30%;
  }
  .mainImageContainer {
    width: 100%;
    height: 450px;
    padding: 5px;
  }
  .mainImageContainer img {
    height: 100%;
    max-height: 450px;
    width: 100%;
    object-fit: cover;
  }

  .secondImageContainer {
    width: 100%;
    height: 150px;
    padding: 5px;
  }
  .secondImageContainer img {
    height: 100%;
    max-height: 150px;
    width: 100%;
    object-fit: cover;
    .homeContainer {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
    }
    .homeContainer div {
      padding: 5px;
    }
  }
`;
