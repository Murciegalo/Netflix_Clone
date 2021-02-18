import React from 'react'
import HeaderCont from '../../header/HeaderCont'
import JumboTronCont from '../../jumbotron/JumboTronCont'
import AccordionCont from '../../accordion/AccordionCont'
import FooterCont from '../../footer/FooterCont'
import OptFormCont from '../../optForm/OptFormCont'
import Hero from '../../hero/Hero'

export default function Home() {
  return <>
    <HeaderCont>
      <Hero>
        <Hero.Title>Unlimited movies, TV shows, and more.</Hero.Title>
        <Hero.SubTitle>Watch anywhere. Cancel anytime.</Hero.SubTitle>
      </Hero>
      <OptFormCont />
    </HeaderCont>
    <JumboTronCont />
    <AccordionCont />
    <FooterCont />
  </>
}
