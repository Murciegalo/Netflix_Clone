import React, {useState, useContext, createContext} from 'react'
import {
  Container,
  Group,
  GroupSmall,
  Title,
  Subtitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Entities,
  Meta,
  Item,
  Image
} from './styles'
import Player from '../player/Player'

export const FeatureContext = createContext()

export default function Card({children, ...restProps}) {
  const [showFeature, setShowFeature] = useState(false)
  const [itemFeature, setItemFeature] = useState({})

  return <FeatureContext.Provider value={{
    showFeature,
    setShowFeature,
    itemFeature,
    setItemFeature
  }}>
    <Container {...restProps}>{children}</Container>
  </FeatureContext.Provider>
}

Card.Group = function CardGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>
}

Card.GroupSmall = function CardGroupSmall({children, ...restProps}) {
  return <GroupSmall {...restProps}>{children}</GroupSmall>
}

Card.Title = function CardTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Card.Subtitle = function CardSubtitle({children, ...restProps}) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}

Card.Entities = function CardEntities({children, ...restProps}) {
  return <Entities {...restProps}>{children}</Entities>
}

Card.Text = function CardGroup({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}
// Meta info

Card.Meta = function CardMeta({children, ...restProps}) {
  return <Meta {...restProps}>{children}</Meta>
}

Card.Item = function CardItem({item, children, ...restProps}) {
  const { setItemFeature, setShowFeature } = useContext(FeatureContext);
  return <Item 
    {...restProps}
    onClick={() => {
      setItemFeature(item)
      setShowFeature(true)
    }}
  >
    {children}
  </Item>
}

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps}/>
}

Card.Feature = function CardFeature({children, category, ...restProps}) {
  const { itemFeature, showFeature, setShowFeature } = useContext(FeatureContext);

  return showFeature ? (
    <Feature 
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
      {...restProps}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="images/icons/close.png" alt="Close" />
        </FeatureClose>
        <GroupSmall margin={'30px'}>
          <Maturity rating={itemFeature.maturity}>{
            itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
             itemFeature.genre.slice(1)}
          </FeatureText>
        </GroupSmall>
        <Player>
            <Player.Btn />
            <Player.Video src='/videos/bunny.mp4' />
        </Player>
      </Content>
    </Feature>
  ) : null
}