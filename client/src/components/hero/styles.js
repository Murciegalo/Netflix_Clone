import styled from 'styled-components/macro'

export const Container = styled.div`
  padding: 120px 0 0 0;
  text-align: center;

  @media (max-width: 600px){
    padding: 40px 0;
  }
`

export const Title = styled.h1`
  font-size: 3.625rem;
  color: white;
  max-width: 640px;
  margin: 0 auto;
  font-weight: 600;
  line-height: 1.1;

  @media (max-width: 600px){
    font-size: 2.125rem;
  }
`
export const SubTitle = styled.h2`
  font-size: 1.625rem;
  color: white;
  margin: 1rem auto;
  max-width: 640px;
  font-weight: normal;
  
  @media (max-width: 600px){
    font-size: 1.525rem;
  }
`