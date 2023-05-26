import { styled } from 'styled-components';

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  border: 4px solid #080808;
  background-color: #849efcff;
  padding: 5px;
  margin: 5px;
  list-style-type: none;
  &:hover {
    background-color: #fded54ff;
  }
`;
