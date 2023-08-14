import { styled } from "styled-components";

export const StyledSemiCircle = styled.section`
  @media screen and (min-width: 768px) {
    &:before {
      position: absolute;
      content: "";
      width: 240px;
      height: 480px;
      right: 0;
      bottom: 0;
      border-radius: 100rem 0 0 100rem;
      background-color: #777762;
    }
  }
`;
