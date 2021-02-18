import React from 'react'
import HeaderCont from '../../header/HeaderCont'
import JumboTronCont from '../../jumbotron/JumboTronCont'
import AccordionCont from '../../accordion/AccordionCont'
import FooterCont from '../../footer/FooterCont'
import OptFormCont from '../../optForm/OptFormCont'

export default function Home() {
  return <>
    <HeaderCont>
      <OptFormCont />
    </HeaderCont>
    <JumboTronCont />
    <AccordionCont />
    <FooterCont />
  </>
}
