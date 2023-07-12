import { styled } from "styled-components";

export const MenuButton = styled.button`
  position: fixed;
  padding: 10px;
  margin: 5px;
  font-size: 16px;
  top: 10px;
  right: 10px;
  border: 2px solid black;
  border-radius: 20px;
  background-color: black;
  // color: #fde9aa;
  color: white;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  cursor: pointer;
  &:hover {
    background-color: #777762;
    border: 2px solid black;
  }
`;
