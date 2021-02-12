import React from 'react'
import Accordion from './Accordion'
import faqs from '../../featured/faqs.json'

export default function AccordionCont() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqs.map(el => (
        <Accordion.Item key={el.id}>
            <Accordion.Header>{el.header}</Accordion.Header>
            <Accordion.Body>{el.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}
