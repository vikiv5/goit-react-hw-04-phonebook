import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0 20px;
  list-style: none;
`;

export const ListItem = styled.li`

  padding : 5 px 10px ; 
  border: none ;
  cursor:pointer;
  color: black;
  background-color: violet;


`;

export const Button = styled.button`
  padding: 5px 20px;
  color: #333340;
  border: 1px solid pink;
  border-radius: 3px;
  cursor :pointer;
  display :flex;
`;