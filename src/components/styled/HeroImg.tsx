import { styled } from 'styled-components';

export const HeroImg = styled.img`
  width: 300px;
  position: absolute;
  bottom: 4%;
  right: 10px;
  @media screen and (min-width: 768px) {
    width: 400px;
    bottom: 20%;
  }
`;
