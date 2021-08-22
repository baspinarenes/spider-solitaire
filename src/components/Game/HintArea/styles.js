// Libraries
import styled from 'styled-components';
import ClickableCursor from '../../../assets/cursors/clickable.cur';

export const HintArea = styled.div`
  padding: 7px;
  height: 100%;
  margin: 0 10px;
  flex-grow: 1;
  max-width: 130px;
  min-width: 100px;
  background-color: green;
  border: 1px solid black;
  color: white;
  font-size: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: url(${ClickableCursor}), pointer;

  @media (min-width: 500px) {
    font-size: 0.8rem;
    max-width: 180px;
  }
`;

export const Hint = styled.div`
  padding: 2px;
  background-color: green;
  display: flex;
  gap: 10px;

  span {
    display: inline-block;
    width: 50%;

    &:first-of-type {
      text-align: right;
    }
  }
`;
