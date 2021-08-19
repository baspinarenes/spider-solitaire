import styled from 'styled-components';

export const Taskbar = styled.section`
  display: flex;
  overflow: hidden;
  height: 35px;
  background: linear-gradient(
    rgb(31, 47, 134) 0px,
    rgb(49, 101, 196) 3%,
    rgb(54, 130, 229) 6%,
    rgb(68, 144, 230) 10%,
    rgb(56, 131, 229) 12%,
    rgb(43, 113, 224) 15%,
    rgb(38, 99, 218) 18%,
    rgb(35, 91, 214) 20%,
    rgb(34, 88, 213) 23%,
    rgb(33, 87, 214) 38%,
    rgb(36, 93, 219) 54%,
    rgb(37, 98, 223) 86%,
    rgb(36, 95, 220) 89%,
    rgb(33, 88, 212) 92%,
    rgb(29, 78, 192) 95%,
    rgb(25, 65, 165) 98%
  );

  button {
    &:hover {
      filter: brightness(105%);
    }

    img {
      height: 100%;
    }
  }
`;

export const TaskList = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 1px;
  padding-top: 4px;
  padding-left: 20px;
  align-items: center;
`;

export const Task = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  height: 60%;
  border-radius: 2px;
  min-width: 100px;
  width: 40%;
  max-width: 120px;
  background-color: rgb(60, 129, 243);
  box-shadow: rgb(0 0 0 / 20%) 1px 0px 1px,
    rgb(255 255 255 / 30%) 1px 1px 1px inset;

  &:hover {
    background-color: rgb(83, 163, 255);
  }

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    line-height: 20px;
  }
`;

export const Toolbar = styled.div`
  height: 100%;
  color: white;
  width: fit-content;
  padding: 4px 15px 3px 10px;
  display: flex;
  font-size: 0.65rem;
  gap: 5px;
  align-items: center;
  border-left: 3px solid rgb(16, 66, 175);
  box-shadow: rgb(24 187 255) 1px 0px 1px inset;
  background: linear-gradient(
    rgb(12, 89, 185) 1%,
    rgb(19, 158, 233) 6%,
    rgb(24, 181, 242) 10%,
    rgb(19, 155, 235) 14%,
    rgb(18, 144, 232) 19%,
    rgb(13, 141, 234) 63%,
    rgb(13, 159, 241) 81%,
    rgb(15, 158, 237) 88%,
    rgb(17, 155, 233) 91%,
    rgb(19, 146, 226) 94%,
    rgb(19, 126, 215) 97%,
    rgb(9, 91, 201) 100%
  );
`;
