import { styled } from "styled-components";

export const StyledNavLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 10px;
  margin: 10px;
  @media screen and (min-width: 768px) {
    text-decoration: none;
    color: #f5ead6;
  }
  @media screen and (min-width: 1024px) {
    font-size: 22px;
  }
  &:hover {
    background-color: #777762;
    border-radius: 20px;
  }
`;
