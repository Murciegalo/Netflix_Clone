import styled from 'styled-components/macro'
import {Link as ReactLink} from 'react-router-dom'

export const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(https://assets.nflxext.com/ffe/siteui/vlv3/399d6794-b770-4b21-992d-a3326710a170/2cd9a2c3-4d52-46dd-99c9-8d77b65625a9/BR-en-20210215-popsignuptwoweeks-perspective_alpha_website_large.jpg);
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

   @media (max-width: 600px){
    height: 520px;
  }
`;
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

export const Logo = styled.img`
  height: 32px;
  width: 112px;

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