import { styled } from "styled-components";
import { MenuSlide } from "./MenuAnimations";

// ta med en boolean som sätter igång en transition

export const Menu = styled.nav`
  z-index: 10;
  position: fixed;
  top: 60px;
  right: 10px;
  animation: ${MenuSlide} 1s linear;
`;
