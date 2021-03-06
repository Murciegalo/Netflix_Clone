import styled from 'styled-components/macro'


export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 815px;
  margin: 1em auto;
  flex-wrap: wrap;

  @media (max-width: 1000px){
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
  }

`

export const Text = styled.h3`
  max-width: none;
  padding-bottom: 20px;
  font-size: 1.2rem;
  color: white;
  margin: 0 auto;
  font-weight: 400;
  
  @media (max-width: 600px){
    font-size: 1.325rem;
    padding: 10px 18px;
  }
`

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
  
  @media (max-width: 600px){
    height: 50px;
    width: 80%;
  }
`

export const Btn = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  padding: 0 32px;
  font-size: 26px;
  border: none;
  border-left: 1px solid #333;
  cursor: pointer;

  svg {
    height: 1em;
    width: 1em;
    path{
      fill: #fff;
    }
  }
  &:hover {
    background: #f40612;
    box-shadow: 0 1px 0 rgba(0,0,0,.45);
  }
  @media (max-width: 1000px){
    margin-top: .5em;
    border-radius: 2%;
  }
  @media (max-width: 600px){
    font-size: 16px;
    height: 40px;
    padding: 10px 20px;
    margin-top: 1em;
    border-radius: 2%;
  }
`



