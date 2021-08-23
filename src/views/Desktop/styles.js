// Libraries
import styled from 'styled-components';

export const Desktop = styled.div`
  background-image: url(${`${process.env.PUBLIC_URL}/winxp-background.webp`});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
`;

export const ProgramContainer = styled.main`
  height: calc(100% - 35px);
`;

export const ProgramList = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
  padding: 40px;
`;
