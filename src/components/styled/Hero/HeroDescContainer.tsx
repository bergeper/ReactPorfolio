import { styled } from "styled-components";

export const HeroDescContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 240px;
  height: 480px;
  border-radius: 0 100rem 100rem 0;
  background-color: #777762;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    height: 800px;
    border-radius: 0 40rem 40rem 0;
    background-color: #777762;
  }
`;
