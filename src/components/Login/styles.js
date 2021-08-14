import styled from 'styled-components';

export const LoginScreen = styled.div`
  height: 100vh;
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
    height: calc(100vh - 90px - 120px);
    background-color: #508fd9;
    background: linear-gradient(
      130deg,
      rgba(221, 221, 221, 1) 0%,
      rgba(80, 143, 217, 1) 35%,
      rgba(80, 143, 217, 1) 100%
    );
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  footer {
    height: 120px;
    background-color: #004da3;
    padding: 0 50px;
    border-top: 3px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      90deg,
      #004da3 0%,
      #f09644 50%,
      #004da3 100%
    );
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1rem;
  }
`;

export const LoginDescribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 30px;
  padding-right: 60px;
  font-size: 1.9rem;
  border-right-width: 1px;
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
  border-right-style: solid;

  img {
    width: 200px;
  }
`;

export const Accounts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-left: 30px;
`;

export const Account = styled.div`
  background-color: yellow;
`;

export const CustomAccount = styled(Account)`
  background-color: green;
`;

export const FooterDescribe = styled.span`
  max-width: 500px;
`;

export const ShutdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 35px;
    height: 35px;
  }

  span {
    font-size: 1.3rem;
  }
`;
