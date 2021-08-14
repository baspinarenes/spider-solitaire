import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% {
    transform: translate(-40px);
  }
  100% {
    transform: translate(200px);
  }
`;

export const SplashScreen = styled.div`
  height: 100vh;
  background-color: black;
  padding: 7px 33px;
  color: white;
  font-size: 1rem;
  font-family: 'MS Shell Dlg 2';
  cursor: none;

  main {
    height: calc(100vh - 60px - 14px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  footer {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  width: 50vw;
  max-width: 300px;
  margin-bottom: 70px;
`;

export const Loader = styled.div`
  height: 20px;
  width: 200px;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 2px 1px;
  overflow: hidden;
`;

export const Bars = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  height: 100%;
  gap: 3px;
  animation: ${loadingAnimation} 2s infinite;
  animation-timing-function: linear;
`;

export const Bar = styled.div`
  width: 10px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    #222e9d,
    #3043d5,
    #5f80fc,
    #6f8dfd,
    #859ffe,
    #8da6ff,
    #5b7af9,
    #3346d7,
    #2d3ed2
  );
`;

export const FooterLogo = styled.img`
  height: 60px;
  filter: invert(100%);
`;
