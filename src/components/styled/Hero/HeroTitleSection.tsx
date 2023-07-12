import { styled } from "styled-components";

export const HeroTitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  height: 100vh;
  @media screen and (min-width: 768px) {
    padding-top: 60px;
    justify-content: left;
    justify-content: center;
  }
`;
