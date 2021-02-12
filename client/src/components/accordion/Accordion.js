import React, {useState, createContext, useContext} from 'react'
import {Container, Inner, Title, Frame, Item, Header, Body} from './styles'

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
  // const {toogle, setToogle} = useContext()
  // const changer = toogle => setToogle(!toogle)
  return <Header {...restProps}>
    {children}
  </Header>
}

Accordion.Body = function AccordionBody({children, ...restProps}) {
  // const {toogle} = useContext()
  // const body = toogle ? <Body {...restProps}>{children}</Body> : null  
  return 'alallaa'
}