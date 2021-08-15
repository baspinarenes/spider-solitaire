import styled from 'styled-components';
import XpBackground from '../../assets/images/win-xp-background.webp';

export const Desktop = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${XpBackground});
`;

export const ProgramContainer = styled.main`
  height: calc(100vh - 35px);
`;

export const ProgramList = styled.main`
  padding: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Program = styled.button`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 0.7rem;
  line-height: 0.8rem;
  width: 70px;
`;
