// Libraries
import styled from 'styled-components';
// Components | Utils
import { styledComponents } from '../../../globalStyles';

export const Taskbar = styled.section`
  background: ${(props) => props.theme.gradients.taskbarBg};
  display: flex;
  height: 35px;
  overflow: hidden;
`;

export const StartButton = styled(styledComponents.Button)`
  &:hover {
    filter: brightness(105%);
  }
  img {
    height: 100%;
  }
`;

export const TaskList = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  gap: 1px;
  padding-left: 20px;
  padding-top: 4px;
`;

export const Task = styled(styledComponents.Button)`
  align-items: center;
  background-color: ${(props) => props.theme.colors.taskBg};
  border-radius: 2px;
  box-shadow: ${(props) => props.theme.boxShadows.task};
  display: flex;
  gap: 3px;
  height: 65%;
  max-width: 120px;
  min-width: 100px;
  padding: 4px 8px;
  width: 40%;

  &:hover {
    background-color: ${(props) => props.theme.colors.taskBg$hover};
  }

  span {
    font-size: 0.55rem;
    line-height: 0.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
