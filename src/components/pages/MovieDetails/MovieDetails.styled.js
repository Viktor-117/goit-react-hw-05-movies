import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ReturnBtn = styled(NavLink)`
  display: inline-block;
  margin-top: 20px;
  margin-left: 30px;
  background-color: #efefef;
  padding: 2px 6px;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
`;

export const Thumb = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  display: flex;
`;

export const Poster = styled.img``;

export const InfoBox = styled.div`
  margin-left: 20px;
  margin-top: 20px;
`;

export const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
`;

export const Text = styled.div`
  margin-top: 10px;
  padding-right: 30px;
`;

export const Title2 = styled.div`
  margin-top: 20px;
  font-size: 22px;
  font-weight: 500;
`;

export const Title3 = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
`;

export const AdditionalBox = styled.div`
  margin-top: 40px;
  padding: 30px 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const AdditionalList = styled.ul`
  list-style: inside;
  margin-left: 20px;
  margin-top: 10px;
`;

export const StyledLink = styled(NavLink)``;
