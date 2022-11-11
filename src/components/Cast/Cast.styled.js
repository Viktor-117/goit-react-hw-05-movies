import styled from 'styled-components';

export const Text = styled.p`
  margin-top: 10px;
  margin-left: 20px;
`;

export const CreditsList = styled.ul`
  list-style: inside;
  margin-left: 20px;
`;

export const Photo = styled.img`
  margin-top: 30px;
  width: 150px;
`;

export const ListItem = styled.li`
  padding-bottom: 10px;
  margin-right: 30px;
  :not(:last-of-type) {
    border-bottom: 1px solid;
  }
`;
