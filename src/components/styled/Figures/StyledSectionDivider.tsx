import { styled } from "styled-components";

export const StyledDividerTopRight = styled.div`
  @media screen and (min-width: 768px) {
    &:before {
      position: absolute;
      content: "";
      width: 240px;
      height: 480px;
      right: 0;
      bottom: 0;
      border-radius: 100rem 0 0 0;
      background-color: #777762;
    }
  }
`;

export const StyledDividerBottomRight = styled.div`
  @media screen and (min-width: 768px) {
    &:before {
      position: absolute;
      content: "";
      width: 240px;
      height: 480px;
      right: 0;
      top: 0;
      border-radius: 0 0 0 100rem;
      background-color: #777762;
    }
  }
`;

export const StyledDividerTopLeft = styled.div`
  @media screen and (min-width: 768px) {
    &:before {
      position: absolute;
      content: "";
      width: 240px;
      height: 480px;
      left: 0;
      bottom: 0;
      border-radius: 0 100rem 0 0;
      background-color: #777762;
    }
  }
`;

export const StyledDividerBottomleft = styled.div`
  @media screen and (min-width: 768px) {
    &:before {
      position: absolute;
      content: "";
      width: 240px;
      height: 480px;
      left: 0;
      top: 0;
      border-radius: 0 0 100rem 0;
      background-color: #777762;
    }
  }
`;
