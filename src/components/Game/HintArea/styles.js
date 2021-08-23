// Libraries
import styled from 'styled-components';
// Assets
import ClickableCursor from '../../../assets/cursors/clickable.cur';

export const HintArea = styled.div`
  background-color: green;
  border: 1px solid black;
  color: white;
  cursor: url(${ClickableCursor}), pointer;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 0.5rem;
  height: 100%;
  justify-content: center;
  margin: 0 10px;
  max-width: 130px;
  min-width: 100px;
  padding: 7px;

  @media (min-width: ${(props) =>
      props.theme.breakpoints.smallTablet}) {
    font-size: 0.8rem;
    max-width: 180px;
  }
`;

export const Hint = styled.div`
  background-color: green;
  display: flex;
  gap: 10px;
  padding: 2px;

  span {
    display: inline-block;
    width: 50%;

    &:first-of-type {
      text-align: right;
    }
  }
`;
