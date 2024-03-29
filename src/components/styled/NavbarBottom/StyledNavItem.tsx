import { styled } from "styled-components";

export const StyledNavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  @media screen and (min-width: 768px) {
    list-style: none;
  }
`;
