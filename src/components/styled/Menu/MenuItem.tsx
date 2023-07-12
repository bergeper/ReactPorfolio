import { styled } from "styled-components";

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: black;
  padding: 10px;
  margin: 5px;
  height: 40px;
  list-style-type: none;
  &:hover {
    background-color: #777762;
  }
`;
