import { styled } from 'styled-components';

export const StyledHeader = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1bbd1bbb;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 85vh;
  }
`;
