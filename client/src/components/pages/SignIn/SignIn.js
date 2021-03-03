import React, {useState} from 'react'
import FooterCont from '../../footer/FooterCont'
import Form from '../../form/Form'
import HeaderCont from '../../header/HeaderCont'

export default function SignIn() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(null)
  const errorDisplay = error && <Form.Error>{error}</Form.Error>
  
  // BASIC form validations
  const isInvalid = password === '' || email === ''

  const handleSubmit = () => {
    console.log('submit');
  }

  return <>
    <HeaderCont>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {errorDisplay}
        <Form.Base onSubmit={handleSubmit} method='POST'>
          <Form.Input
            placeholder = 'Email address'
            value = {email}
            onChange = {({target}) => setEmail(target.value)}
          />
          <Form.Input
            type = 'password'
            placeholder = 'Password'
            autoComplete = 'off'
            value = {password}
            onChange = {({target}) => setPassword(target.value)}
          />
          <Form.Submit disabled={isInvalid}>Sign In</Form.Submit>
        </Form.Base>
      </Form>
    </HeaderCont>
    <FooterCont />
  </>
}