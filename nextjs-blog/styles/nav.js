import styled from 'styled-components';

export const NavUl = styled.ul`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: darkgray;
`;

export const NavLi = styled.li`
  * {
    color: white;

    :hover {
      color: dimgray;
    }
  }
`;
