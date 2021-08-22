// Libraries
import styled from 'styled-components';
// Assets
import ClickableCursor from '../../../assets/cursors/clickable.cur';

export const DealArea = styled.div`
  width: 110px;
  height: 100%;
  display: inline-flex;
  flex-direction: row-reverse;
  cursor: url(${ClickableCursor}), pointer;

  .card {
    &:not(:last-child) {
      margin-left: -30px;

      @media (min-width: ${(props) =>
          props.theme.breakpoints.smallTablet}) {
        margin-left: -62px;
      }
    }

    img {
      height: 100%;
    }
  }
`;
