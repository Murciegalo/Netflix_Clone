import styled from 'styled-components/macro'


export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  @media (max-width: 1000px){
  }
`
export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
  @media (max-width: 1000px){
  }
`
export const Frame = styled.div`

`

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;
  
  &:first-of-type{
    margin-top: 3em;
  }
`

export const Title = styled.h1`
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

export const Header = styled.h1`

  @media (max-width: 1000px){
    font-size: 26px;
  }
`

export const Body = styled.div`

`