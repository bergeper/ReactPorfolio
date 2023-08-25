import { styled } from "styled-components";

export const StyledContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  min-height: 100vh;
  @media screen and (min-width: 764px) {
    min-height: 50vh;
  }
`;
