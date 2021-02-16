import styled from 'styled-components/macro'


export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 3em;
  flex-wrap: wrap;

  @media (max-width: 1000px){
    flex-direction: column;
    align-items: center;
  }

`
export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
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

  svg{
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
`

export const Text = styled.h3`
  max-width: none;
  padding-bottom: 20px;
  font-size: 1.2rem;
  // padding: 0 5%;
  color: white;
  margin: 0 auto;
  font-weight: 400;
  @media (max-width: 600px){
    font-size: 26px;
  }
`

