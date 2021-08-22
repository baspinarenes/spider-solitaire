// Libraries
import styled from 'styled-components';
// Assets
import { styledComponents } from '../../../globalStyles';
import CanNotCursor from '../../../assets/cursors/cannot-clickable.cur';
import BeamCursor from '../../../assets/cursors/beam.cur';

export const UserAccount = styled(styledComponents.Button)`
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0.6;
  color: white;
  font-size: 1.3rem;

  &:hover {
    opacity: 1;
    transition: opacity 400ms;

    cursor: ${(props) =>
      !props.$isGuest &&
      !props.$isUsernameWritten &&
      `url(${CanNotCursor}), pointer`};
  }

  input {
    background: transparent;
    border: 0;
    height: 30px;
    outline: 0;
    font-size: 1.3rem;
    color: white;

    &:hover {
      cursor: url(${BeamCursor}), pointer;
    }
  }

  &:nth-child(2) {
    display: none;
  }

  @media (min-width: 600px) {
    &:nth-child(2) {
      display: flex;
    }
  }
`;

export const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border: 2px solid white;
  border-radius: 5px;

  &:hover {
    border-color: yellow;
  }
`;
