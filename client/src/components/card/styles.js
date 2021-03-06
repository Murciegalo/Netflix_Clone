import styled from 'styled-components/macro'
import {Link as ReactLink} from 'react-router-dom'

export const Title = styled.h2`
  font-size; 24px;
  color: #e5e5e5;
  font-weigth: bold;
  margin-left: 56px;
  margin-right: 56px;
`;

export const FeatureText= styled.p`
  margin: 0;
  color: white;
  font-size: 18px;
  font-weight: ${({fontWeight}) => 
  fontWeight === 'bold' ? 'bold' : 'normal'};

  @media (max-width: 600px){
    line-height: 22px;
  }

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
  align-items: ${alignItems}`};
  ${({margin}) => margin && `
  margin: ${margin}`};

  > ${Container}:first-of-type {
    @media (min-width: 1100px){
      margin-top: -150px;
      z-index: 0;
    }
  }
`;

export const GroupSmall = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({margin}) => margin && `
  margin-top: ${margin}`};
`;

export const Subtitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin: 10px 20px;
  user-select: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin: 0 20px;
  user-select: none;
  line-height: normal;
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;
  @media ( max-width: 1000px){
    height: auto;
    background-size: auto;

    ${Title}{
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 20px;
    }
    ${FeatureText}{
      font-size: 14px;
    }
  }
`;

export const FeatureTitle= styled(Title)`
  margin-left: 0;
  height: 20px;
`;

export const FeatureClose= styled.button`
  color: white;
  position: absolute;
  right: 28px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img{
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Maturity= styled.p`
  background-color: ${({rating}) => rating >= 15 ?
  'red' : 'green'};
  border-radius: 15px;
  width: 20px;
  height: 20px;
  padding: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px; 
  line-height: 18px;
`;

export const Content= styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px){
    margin: 30px;
    max-width: none;
  }
`;

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.25s;

  &:hover{
    transform: scale(1.3);
    z-index: 99;
  }
  &: hover ${Meta}{
    display: block;
  }

  @media (min-width: 1200px){
    &:hover ${Meta}, 
    &:hover ${Text}, 
    &:hover ${Subtitle}{
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type{
    margin-left: 56px;

    @media (max-width: 1000px){
      margin-left: 30px;
    }
  }

   &:last-of-type{
    margin-right: 56px;

    @media (max-width: 1000px){
      margin-right: 30px;
    }
  }
`;

export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;
