import React from 'react'
import Accordion from './Accordion'
import faqs from '../../featured/faqs.json'
import OptForm from '../optForm/OptForm'

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
      <OptForm>
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
        <OptForm.Input placeholder='Email Address'/>
        <OptForm.Btn>Get Started</OptForm.Btn>
      </OptForm>
    </Accordion>
  )
}
