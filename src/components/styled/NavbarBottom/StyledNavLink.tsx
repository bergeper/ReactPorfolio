import { styled } from 'styled-components';

export const StyledNavLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 22px;
  padding: 5px;
  @media screen and (min-width: 768px) {
    text-decoration: none;
    color: #000000;
  }
  &:hover {
    background-color: #fded54ff;
    border: 2px solid black;
    padding: 3px;
  }
`;
