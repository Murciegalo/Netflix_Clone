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
  const {toogle, setToogle} = useContext(Context)
  const changer = toogle => setToogle(!toogle)
  const icon = toogle ? <img src='../../images/icons/close-slim.png' alt='C'/> 
  : <img src='../../images/icons/add.png' alt='D'/>; 
  
  return <Header {...restProps} onClick={() => changer(toogle)}>
    {children}
    {icon}
  </Header>
}

Accordion.Body = function AccordionBody({children, ...restProps}) {
  const {toogle} = useContext(Context)
  const body = toogle ? <Body {...restProps}>{children}</Body> : null  
  
  return body
}