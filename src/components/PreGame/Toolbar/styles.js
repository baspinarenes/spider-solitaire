// Libraries
import styled from 'styled-components';

export const Toolbar = styled.div`
  align-items: center;
  background: ${(props) => props.theme.gradients.toolbarBg};
  border-left: 3px solid rgb(16, 66, 175);
  color: ${(props) => props.theme.colors.toolbarText};
  display: flex;
  font-size: 0.65rem;
  gap: 5px;
  height: 100%;
  padding: 4px 15px 3px 10px;
  width: fit-content;
`;
