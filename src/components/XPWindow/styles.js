import styled from 'styled-components';
import CloseSVG from '../../assets/images/close.svg';
import CloseHoverSVG from '../../assets/images/close-hover.svg';
import CloseActiveSVG from '../../assets/images/close-active.svg';

export const Window = styled.div`
  height: 100%;
  background-color: white;
  display: grid;
  grid-template-rows: 30px 20px 1fr;
  grid-template-columns: 100%;
`;

export const TitleBar = styled.div`
  font-family: 'Trebuchet MS';
  background: linear-gradient(
    180deg,
    rgba(9, 151, 255, 1) 0%,
    rgba(0, 83, 238, 1) 8%,
    rgba(0, 80, 238, 1) 40%,
    rgba(0, 102, 255, 1) 88%,
    rgba(0, 102, 255, 1) 93%,
    rgba(0, 91, 255, 1) 95%,
    rgba(0, 61, 215, 1) 96%,
    rgba(0, 61, 215, 1) 100%
  );
  font-size: 13px;
  padding: 6px;
  color: white;
  display: flex;
  align-items: center;

  img {
    height: 100%;
  }
`;

export const CloseButton = styled.button`
  margin-left: auto;
  width: 23px;
  height: 23px;
  background-image: url(${CloseSVG});
  background-repeat: no-repeat;

  &:hover {
    background-image: url(${CloseHoverSVG});
  }

  &:not(:disabled):active {
    background-image: url(${CloseActiveSVG});
  }
`;

export const WindowBody = styled.div`
  height: 100%;
`;
