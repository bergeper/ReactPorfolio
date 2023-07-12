import { styled } from "styled-components";

export const StyledNavLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 5px;
  @media screen and (min-width: 768px) {
    text-decoration: none;
    color: white;
  }
  @media screen and (min-width: 1024px) {
    font-size: 22px;
  }
  &:hover {
    border: 2px solid white;
    padding: 3px;
  }
`;
