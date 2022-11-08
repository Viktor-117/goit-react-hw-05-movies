import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 20px 30px;
  display: flex;
  gap: 20px;
  text-decoration: none;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.45);
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-size: 18px;

  &.active {
    color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
    text-decoration: underline;
  }
`;
