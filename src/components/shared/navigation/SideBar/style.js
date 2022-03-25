import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  left: 0;
  z-index: 100;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.body};
  display: grid;
  align-items: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: ${(props) => props.theme.text};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SideBarNavLink = styled(Link)`
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.text};
    transition: 0.2s ease-in-out;
  }
`;

export const SideBArMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
