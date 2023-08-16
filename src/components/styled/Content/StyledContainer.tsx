import { styled } from "styled-components";

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 30vh;
  @media screen and (min-width: 764px) {
    flex-direction: row;
  }
`;
