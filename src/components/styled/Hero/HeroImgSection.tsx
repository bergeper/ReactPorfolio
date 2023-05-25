import { styled } from 'styled-components';

export const HeroImgSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 50vh;
  @media screen and (min-width: 768px) {
    height: 85vh;
    width: 50%;
  }
`;
