import styled from 'styled-components/macro'
import {Link as ReactLink} from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
  @media (max-width: 1000px){
    margin: 0 30px;
  }
`;

export const Title = styled.h1`
  width: 100%;
  color: white;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
  @media (min-width: 1449px){
    height: 45px;
    width: 167px;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  
  @media (min-width: 1449px){
    height: 45px;
    width: 167px;
  }
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 180px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;

  &:hover {
    border: 3px solid white;
  }

  @media (min-width: 1449px){
    height: 45px;
    width: 167px;
  }
`;

export const Name = styled.li`
  max-height: 200px;
  max-width: 200px;
  text-align: center;
  margin-right: 30px;

  &: last-of-type {
    margin-right: 0;
  }

  @media (min-width: 1449px){
    height: 45px;
    width: 167px;
  }
`;

export const User = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;

  &:hover{
    font-weight: bold;
    color: #e5e5e5;
  }

  &:hover > ${Name} {
    font-weight: bold;
    color: white;
  }
  @media (min-width: 1449px){
    height: 45px;
    width: 167px;
  }
`;


