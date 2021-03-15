import React, {useState, useContext, createContext} from 'react'
import {
  Container,
  Group,
  Title,
  Subtitle,
  Text,
  Meta,
  Item,
  Image
} from './styles'

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

Card.Title = function CardTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Card.Subtitle = function CardSubtitle({children, ...restProps}) {
  return <Subtitle {...restProps}>{children}</Subtitle>
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
