import styled from 'styled-components';

export const Nav = styled.nav`
  color: white;
  background: #1f6f78;
  height: 4rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem calc((100vw-1000px) / 2);
  z-index: 10;
  font-weight: bold;
  font-size: 1.5rem;

  /* @media screen and (max-width: 678px) {
    justify-content: stretch;
  } */
`;

export const NavBarTitle = styled.div`
  padding-left: 1rem;
`;