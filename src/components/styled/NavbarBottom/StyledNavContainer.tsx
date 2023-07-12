import { styled } from "styled-components";

export const StyledNavContainer = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    height: 15vh;
    border-top: 2px solid white;
    background-color: #000000;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
