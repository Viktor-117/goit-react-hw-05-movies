import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SearchForm = styled.form`
  margin-top: 20px;
  margin-left: 30px;
`;

export const FormInput = styled.input`
  width: 250px;
  padding: 3px;

  :focus {
    outline-color: lightblue;
  }
`;

export const SubmitBtn = styled.button`
  padding: 3px;
`;

export const MoviesList = styled.ul`
  margin-top: 20px;
  margin-left: 30px;
  list-style: inside;
`;

export const StyledLink = styled(NavLink)``;
