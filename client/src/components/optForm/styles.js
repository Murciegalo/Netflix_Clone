import styled from 'styled-components/macro'


export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`
export const Input = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  width: 815px;
  margin: auto;
`

export const Btn = styled.div`
  color: white;
  margin-bottom: 10px;

  &:first-of-type{
    margin-top: 3em;
  }
`

export const Text = styled.h1`
  font-size: 15px;
  color: white;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  text-align: center;

  @media (max-width: 600px){
    font-size: 26px;
  }
`

