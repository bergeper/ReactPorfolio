import { styled } from 'styled-components';

export const HeroTitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 50vh;
  @media screen and (min-width: 768px) {
    height: 85vh;
    justify-content: left;
    justify-content: center;
    width: 50%;
  }
`;
