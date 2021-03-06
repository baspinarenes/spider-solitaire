// Libraries
import styled from 'styled-components';

export const CompletedDeckArea = styled.div`
  width: 110px;
  height: 100%;
  display: inline-flex;

  .card {
    &:not(:first-child) {
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
