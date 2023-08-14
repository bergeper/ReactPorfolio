import { styled } from "styled-components";

export const StyledNavContainer = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    z-index: 10;
    display: block;
    height: 15vh;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
