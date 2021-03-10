import styled from 'styled-components/macro'
import {Link as ReactLink} from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin: 0 46px;

  @media (max-width: 1000px){
    margin: 0 30px;
  }
`;

export const Title = styled.h2`
  height: 32px;
  width: 112px;

  @media (min-width: 1449px){
    height: 45px;
    width: 167px;
  }
`;

export const List = styled.ul`
  height: 32px;
  width: 112px;

  @media (min-width: 1449px){
    height: 45px;
    width: 167px;
  }
`;

export const User = styled.h2`
  height: 32px;
  width: 112px;

  @media (min-width: 1449px){
    height: 45px;
    width: 167px;
  }
`;

export const Picture = styled.img`
  height: 32px;
  width: 112px;

  @media (min-width: 1449px){
    height: 45px;
    width: 167px;
  }
`;

export const Name = styled.h3`
  height: 32px;
  width: 112px;

  @media (min-width: 1449px){
    height: 45px;
    width: 167px;
  }
`;
