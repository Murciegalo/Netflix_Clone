import styled from 'styled-components/macro'
import {Link as ReactLink} from 'react-router-dom'

export const BackGround = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
`;

export const Logo = styled.img`
  display: flex;
`;

export const Btn = styled(ReactLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover{
    background-color: #f40612;
  }
`;