import React, {useState} from 'react'
import FooterCont from '../../footer/FooterCont'
import Form from '../../form/Form'
import HeaderCont from '../../header/HeaderCont'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const errorDisplay = error && <Form.Error>{error}</Form.Error>
  
  // BASIC form validations
  const isInvalid = password === '' || email === ''
  console.log(isInvalid);
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
        <Form.Text>
          New to Netflix? <Form.Link to='signUp'>Sign up now.</Form.Link>
        </Form.Text>
        <Form.SmallText>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span> </span> 
          <Form.LinkII to='#'>Learn More</Form.LinkII>
        </Form.SmallText>
      </Form>
    </HeaderCont>
    <FooterCont />
  </>
}