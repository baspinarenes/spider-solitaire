import styled from 'styled-components';

export const LoginScreen = styled.div`
  height: 100%;
  overflow: hidden;
  color: white;

  header {
    height: 90px;
    background-color: #004da3;
    border-bottom: 3px solid;
    border-image-source: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.8) 30%,
      rgba(255, 255, 255, 0.9) 50%,
      rgba(255, 255, 255, 0.8) 70%,
      rgba(255, 255, 255, 0) 100%
    );
    border-image-slice: 1;
  }

  main {
    padding: 20px;
    height: calc(100% - 90px - 130px);
    background-color: #508fd9;
    background: linear-gradient(
      130deg,
      rgba(221, 221, 221, 1) 0%,
      rgba(80, 143, 217, 1) 35%,
      rgba(80, 143, 217, 1) 100%
    );
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr;

    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    }
  }

  footer {
    height: 130px;
    background-color: #004da3;
    padding: 10px 50px;
    border-top: 3px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      90deg,
      #004da3 0%,
      #f09644 50%,
      #004da3 100%
    );
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    text-align: center;

    @media (min-width: 600px) {
      gap: 30px;
      flex-direction: row;
      justify-content: space-between;
      text-align: initial;
    }
  }
`;

export const LoginDescribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-size: 1.9rem;

  @media (min-width: 600px) {
    padding-right: 60px;
    border-right: 1px solid;
    border-image-source: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 5%,
      rgba(255, 255, 255, 0.5) 15%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0.5) 85%,
      rgba(255, 255, 255, 0) 95%,
      rgba(255, 255, 255, 0) 100%
    );
    border-image-slice: 0 1 0 0;
    align-items: flex-end;
  }

  img {
    width: 200px;
  }

  span {
    font-size: 1.3rem;
  }
`;

export const Accounts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: minmax(70vw, 90vw);
  margin: 0 auto;

  @media (min-width: 600px) {
    padding-left: 30px;
    width: 100%;
  }
`;

export const FooterDescribe = styled.span`
  max-width: 500px;
`;

export const ShutdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    font-size: 1rem;
  }
`;
