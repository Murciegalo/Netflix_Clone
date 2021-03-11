import styled from 'styled-components/macro'
import {Link as ReactLink} from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px){
    margin: 0 30px;
  }
`;

export const Title = styled.h1`

  @media (min-width: 1449px){
    height: 45px;
    width: 167px;
  }
`;

export const List = styled.ul`

  @media (min-width: 1449px){
    height: 45px;
    width: 167px;
  }
`;

export const User = styled.p`
  
  @media (min-width: 1449px){
    height: 45px;
    width: 167px;
  }
`;

export const Picture = styled.img`

  @media (min-width: 1449px){
    height: 45px;
    width: 167px;
  }
`;

export const Name = styled.li`
  
  @media (min-width: 1449px){
    height: 45px;
    width: 167px;
  }
`;
