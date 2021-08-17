import styled from 'styled-components';

export const Menu = styled.div`
  background-color: #ece9d8;
  display: flex;
  font-size: 11px;
`;

export const MenuItem = styled.div`
  padding: 3px 5px;
  display: flex;
  position: relative;

  &:hover {
    background-color: #316ac5;

    & > button {
      color: white;
    }

    div {
      display: flex;
    }
  }
`;

export const MenuButton = styled.button`
  font-size: 11px;
  text-align: left;
  color: black;

  :hover + div {
    display: flex;
  }
`;

export const MenuContent = styled.div`
  display: none;
  position: absolute;
  z-index: 5;
  top: 20px;
  left: 0;
  background-color: white;
  border: 1px solid gray;
  width: 200px;
  padding: 1px;
  flex-direction: column;
`;

export const SubMenuButton = styled.button`
  color: black;
  padding: 2px 2px 4px 12px;
  font-size: 11px;
  width: 100%;
  text-align: left;

  &:hover {
    background-color: #316ac5;
    color: white;
  }
`;
