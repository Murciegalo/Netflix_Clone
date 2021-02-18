import styled from 'styled-components/macro'
import {Link as ReactLink} from 'react-router-dom'

export const BackGround = styled.div`

`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

export const Logo = styled.img`
  height: 32px;
  width: 112px;
  margin-left: 45px;

  @media (min-width: 1449px){
    height: 45px;
    width: 167px;
  }
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