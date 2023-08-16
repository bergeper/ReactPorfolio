import { styled } from "styled-components";

export const StyledHeader = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 85vh;
  }
`;
