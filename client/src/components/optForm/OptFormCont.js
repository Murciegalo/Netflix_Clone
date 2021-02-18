import React from 'react'
import OptForm from './OptForm'

export default function OptFormCont() {
  return <OptForm>
    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
    <OptForm.Input placeholder='Email Address'/>
    <OptForm.Btn>Get Started</OptForm.Btn>
  </OptForm>    
}
