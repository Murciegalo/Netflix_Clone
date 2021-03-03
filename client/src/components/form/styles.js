import styled from 'styled-components/macro'
import {Link as ReactLink} from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
  max-width: 320px;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 5px;
  width: 100%;
  margin: auto;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`;

export const Error = styled.h2`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 28px;
  margin-top: 10px;

`;

export const Text = styled.p`

`;

export const SmallText = styled.p`

`;

export const Link = styled(ReactLink)`
  color: white;
  text-decoration: none;
  
  &:hover{
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 16px 25px;
  width: 85%;
  color: #8c8c8c;
  font-size: 16px;
`;

export const Submit = styled.button`
  width: 100%;
  background: #e50914;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  color: white;
  margin: 24px 0 12px;
  padding: 16px;
`;