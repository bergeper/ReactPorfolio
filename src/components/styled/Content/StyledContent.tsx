import { styled } from "styled-components";

export const StyledContentTitle = styled.article`
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 20px 0px 20px 0px;
  font-size: 24px;
  @media screen and (min-width: 764px) {
    width: 50%;
    justify-content: center;
  }
`;

export const StyledContentDesc = styled.article`
  position: relative;
  display: flex;
  font-size: 18px;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 764px) {
    width: 70%;
  }
`;
