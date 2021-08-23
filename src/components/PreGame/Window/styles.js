// Libraries
import styled from 'styled-components';
// Components | Utils
import { styledComponents } from '../../../globalStyles';
// Assets
import CloseSVG from '../../../assets/images/close.svg';
import CloseHoverSVG from '../../../assets/images/close-hover.svg';
import CloseActiveSVG from '../../../assets/images/close-active.svg';

export const Window = styled.div`
  background-color: ${(props) => props.theme.colors.xpWindowBg};
  display: grid;
  grid-template-rows: 30px 20px 1fr;
  height: 100%;
  width: 100%;
  z-index: 2;
`;

export const TitleBar = styled.div`
  align-items: center;
  background: ${(props) => props.theme.gradients.titleBarBg};
  color: ${(props) => props.theme.colors.titleBarText};
  display: flex;
  font-family: 'Trebuchet MS';
  font-size: 13px;
  padding: 6px;

  img {
    height: 100%;
  }
`;

export const CloseButton = styled(styledComponents.Button)`
  background-image: url(${CloseSVG});
  background-repeat: no-repeat;
  height: 23px;
  margin-left: auto;
  width: 23px;

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
