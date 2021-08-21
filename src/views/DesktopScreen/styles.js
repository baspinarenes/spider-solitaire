import styled from 'styled-components';

export const Desktop = styled.div`
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${`${process.env.PUBLIC_URL}/winxp-background.webp`});
`;

export const ProgramContainer = styled.main`
  height: calc(100% - 35px);
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
