import { styled } from "styled-components";

export const HeroDescSection = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: right;
  @media screen and (min-width: 768px) {
    align-items: self-end;
    width: 50%;
    padding-top: 60px;
  }
`;
