// Libraries
import styled from 'styled-components';
// Assets
import ClickableCursor from '../../../assets/cursors/clickable.cur';

export const DealArea = styled.div`
  cursor: ${(props) =>
    props.dealingDecksLength > 0 &&
    `url(${ClickableCursor}), pointer`};
  display: inline-flex;
  flex-direction: row-reverse;
  height: 100%;
  width: 110px;

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

DealArea.displayName = 'DealArea';
