import { styled } from "styled-components";

export const StyledNavContainer = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    height: 15vh;
    background-color: black;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
