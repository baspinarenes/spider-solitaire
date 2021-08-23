// Libraries
import styled from 'styled-components';
// Components | Utils
import { styledComponents } from '../../../globalStyles';
// Assets
import CanNotCursor from '../../../assets/cursors/cannot-clickable.cur';
import BeamCursor from '../../../assets/cursors/beam.cur';

export const UserAccount = styled(styledComponents.Button)`
  align-items: center;
  color: white;
  display: flex;
  font-size: 1.3rem;
  gap: 10px;
  opacity: 0.6;

  &:hover {
    cursor: ${(props) =>
      !props.$isGuest &&
      !props.$isUsernameWritten &&
      `url(${CanNotCursor}), pointer`};
    opacity: 1;
    transition: opacity 400ms;
  }

  input {
    background: transparent;
    border: 0;
    color: white;
    font-size: 1.3rem;
    height: 30px;
    outline: 0;

    &:hover {
      cursor: url(${BeamCursor}), pointer;
    }
  }

  &:nth-child(2) {
    display: none;
  }

  @media (min-width: ${(props) =>
      props.theme.breakpoints.smallTablet}) {
    &:nth-child(2) {
      display: flex;
    }
  }
`;

export const Avatar = styled.img`
  border: 2px solid white;
  border-radius: 5px;
  height: 60px;
  width: 60px;

  &:hover {
    border-color: yellow;
  }
`;
