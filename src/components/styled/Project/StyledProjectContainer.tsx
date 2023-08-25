import { styled } from "styled-components";

export const StyledProjectContainer = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0px 80px 0px;
  @media screen and (min-width: 768px) {
    width: 90%;
    margin-top: 120px;
    margin-bottom: 120px;
  }
  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;
