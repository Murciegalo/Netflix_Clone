import styled from 'styled-components/macro'
import {Link as ReactLink} from 'react-router-dom'

export const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${({src}) => 
    src ? `../images/misc/${src}.jpg` : 'https://assets.nflxext.com/ffe/siteui/vlv3/399d6794-b770-4b21-992d-a3326710a170/2cd9a2c3-4d52-46dd-99c9-8d77b65625a9/BR-en-20210215-popsignuptwoweeks-perspective_alpha_website_large.jpg'})
    top left / cover no-repeat;
    
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1100px){
    display: flex;
    ${({dontShowSmallViewport}) => dontShowSmallViewport && `background:none`}
  }

  @media (max-width: 600px){
    height: 520px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 530px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: space-between;
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

export const Meta = styled.p`
  display: flex;
  justify-content: space-between;
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
  justify-content: space-between;
`;
