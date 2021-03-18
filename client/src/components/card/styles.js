import styled from 'styled-components/macro'
import {Link as ReactLink} from 'react-router-dom'

export const Title = styled.h2`
  font-size; 24px;
  color: #e5e5e5;
  font-weigth: bold;
  margin-left: 56px;
  margin-right: 56px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  > ${Title}{
    @media(max-width: 1000px){
      margin-left: 30px;
    }
  }
  &:last-of-type{
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  padding-top: 530px;
  flex-direction: ${({flexDirection}) => 
  flexDirection === 'row' ? 'row' : 'column'};
  ${({alignItems}) => alignItems && `
  align-items: ${alignItems}`}
  ${({margin}) => margin && `
  margin: ${margin}`}

  > ${Container}:first-of-type {
    @media (min-width: 1100px){
      margin-top: -150px;
      z-index: 5;
    }
  }
`;

export const Subtitle = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const Feature = styled.div`
`;

export const FeatureTitle= styled(Title)`
`;

export const FeatureText= styled.p`
`;

export const FeatureClose= styled.button`
`;

export const Maturity= styled.p`
`;

export const Content= styled.p`
`;

export const Meta = styled.div`
  display: none;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  display: flex;
  justify-content: space-between;
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;
