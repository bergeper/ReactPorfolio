import { styled } from "styled-components";

export const HeroDescContainer = styled.article`
  text-align: right;
  @media screen and (min-width: 764px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 260px;
    height: 480px;
    border-radius: 100rem 0 0 100rem;
    background-color: #777762;
  }
  @media screen and (min-width: 1200px) {
    width: 300px;
    height: 600px;
    border-radius: 100rem 0 0 100rem;
    background-color: #777762;
  }
`;
