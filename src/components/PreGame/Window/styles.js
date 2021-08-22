import styled, { css } from 'styled-components';
import CloseSVG from '../../../assets/images/close.svg';
import CloseHoverSVG from '../../../assets/images/close-hover.svg';
import CloseActiveSVG from '../../../assets/images/close-active.svg';
import { styledComponents } from '../../../globalStyles';

export const Window = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 30px 20px 1fr;
  z-index: 2;
  background-color: ${(props) => props.theme.colors.xpWindowBg};

  ${(props) =>
    props.isGameOverWindow &&
    css`
      height: ${props?.size.height};
      width: ${props?.size.width};
      left: 0;
      right: 0;
      bottom: 10px;
      position: absolute;
      margin: 0 auto;
      display: ${!props.isGameFinished && 'none'};
      grid-template-rows: 30px 1fr;
    `}
`;

export const TitleBar = styled.div`
  font-family: 'Trebuchet MS';
  background: ${(props) => props.theme.gradients.titleBarBg};
  font-size: 13px;
  padding: 6px;
  color: ${(props) => props.theme.colors.titleBarText};
  display: flex;
  align-items: center;

  img {
    height: 100%;
  }
`;

export const CloseButton = styled(styledComponents.Button)`
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
