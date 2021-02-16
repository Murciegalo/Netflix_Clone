import React, {useState, createContext, useContext} from 'react'
import {Container, Inner, Title, Item, Header, Body} from './styles'

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

Accordion.Item = function AccordionItem({children, ...restProps}) {
  const [toogle, setToogle] = useState(false)
  return <Context.Provider value={{toogle, setToogle}}>
    <Item {...restProps}>{children}</Item>
  </Context.Provider>
}

Accordion.Header = function AccordionHeader({children, ...restProps}) {
  const {toogle, setToogle} = useContext(Context)
  const changer = toogle => setToogle(!toogle)
  const icon = toogle ? <svg id="thin-x" viewBox="0 0 26 26" focusable="true">
    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 
    1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5
    1.8 19.3 0.5 10.5 9.3Z"></path>
  </svg>
  : <svg id="thin-x" viewBox="0 0 26 26" focusable="true">
  <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 
  1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 
  1.8 19.3 0.5 10.5 9.3Z"></path>
  </svg> 
  
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