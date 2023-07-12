import { styled } from "styled-components";

export const StyledHeader = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: #1b1816;
  color: white;
  @media screen and (min-width: 768px) {
    height: 85vh;
  }
`;
