import React, {useState, createContext} from 'react'
import { useContext } from 'react'
import { Container } from '../footer/styles'
import {Inner, Title, Frame, Item, Header} from './styles'

const Context = createContext()
export default function Accordion({children, ...restProps}) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Accordion.Title = function AccordionTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame({children, ...restProps}) {
  return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem({children, ...restProps}) {
  const [toogle, setToogle] = useState(false)
  return <Context.Provider value={{toogle, setToogle}}>
    <Item {...restProps}>{children}</Item>
  </Context.Provider>
}

Accordion.Header = function AccordionHeader({children, ...restProps}) {
  // eslint-disable-next-line no-unused-vars
  const {toogle, setToogle} = useContext()
  const changer = toogle => setToogle(!toogle)
  return <Header onClick={() => changer(toogle)} {...restProps}>
    {children}
  </Header>
}