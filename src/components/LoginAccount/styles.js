import styled from 'styled-components';

export const AccountAvatar = styled.img`
  height: 60px;
  width: 60px;
  border: 2px solid white;
  border-radius: 5px;
`;

export const LoginAccountButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: 0;
  opacity: 0.6;
  color: white;

  &:hover {
    opacity: 1;
    transition: opacity 400ms;

    img {
      border-color: yellow;
    }
  }

  span {
    font-size: 1.3rem;
  }

  input {
    background: transparent;
    border: 0;
    height: 30px;
    outline: 0;
    font-size: 1.3rem;
    color: white;
  }
`;
